locals {
  label = var.label
}

module "lambda_container" {
  source  = "terraform-aws-modules/lambda/aws"
  version = "2.7.0"

  function_name = var.name
  description   = var.description

  create_package = false

  image_uri    = "${var.account_id}.dkr.ecr.${var.region}.amazonaws.com/${var.image_name}:${var.image_tag}"
  package_type = "Image"
}
