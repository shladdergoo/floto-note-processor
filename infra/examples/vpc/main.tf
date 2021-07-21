terraform {
  required_version = ">= 0.13"
}

provider "aws" {
  region = "eu-west-1"
}

module "vpc" {
  source              = "../../modules/vpc"
  region              = "eu-west-1"
  label               = var.label
  vpc_name            = "example-vpc"
  vpc_description     = "Host VPC - example"
  vpc_cidr            = "172.30.0.0/16"
  vpc_private_subnets = ["172.30.0.0/19", "172.30.32.0/19"]
  vpc_public_subnets  = ["172.30.96.0/19", "172.30.128.0/19"]
  vpc_azs             = ["eu-west-1a", "eu-west-1b"]
  tags                = { environment = "example" }
}
