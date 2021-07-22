terraform {
  required_version = ">= 1.0.0"
  backend "s3" {}
}

provider "aws" {
  region = var.region
}

module "vpc-app" {
  source              = "./modules/vpc"
  region              = var.region
  label               = var.app_name
  vpc_name            = "${var.env}-${var.app_name}-app-vpc"
  vpc_description     = "Host VPC for ${var.app_name} app"
  vpc_cidr            = var.vpc_cidr
  vpc_private_subnets = var.vpc_private_subnets
  vpc_public_subnets  = var.vpc_public_subnets
  vpc_azs             = var.vpc_azs
  tags                = var.tags
}

module "dynamodb-table-app" {
  source        = "./modules/dynamodb"
  label         = var.app_name
  table_name    = var.dynamodb_table_name
  partition_key = var.dynamodb_partition_key
  tags          = var.tags
}

resource "aws_ecr_repository" "note-processor-image-repo" {
  name                 = "${var.app_name}-note-processor"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}
