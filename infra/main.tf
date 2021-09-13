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
  name                 = "${var.app_name}-${var.note_processor_function_name}"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = false
  }
}

module "lambda-note-processor" {
  source      = "./modules/lambda-container"
  label       = var.app_name
  name        = "${var.app_name}-${var.note_processor_function_name}"
  description = "${var.note_processor_function_name} function"
  account_id  = var.account_id
  region      = var.region
  image_name  = var.note_processor_image_name
  image_tag   = var.note_processor_image_tag
}

module "iam" {
  source                 = "./modules/iam"
  ci_service_user_name   = "${var.env}-ci-service-user"
  ci_service_policy_name = "${var.env}-ci-service-policy"
  tags                   = var.tags
}

output "ci-key" {
  value = module.iam.ci-key
}

output "ci-secret" {
  value = module.iam.ci-secret
  sensitive = true
}
