locals {
  label = var.label
}

module "dynamodb" {
  source  = "terraform-aws-modules/dynamodb-table/aws"
  version = "1.1.0"

  name     = var.table_name
  hash_key = var.partition_key

  attributes = [
    {
      name = var.partition_key
      type = "S"
    }
  ]

  tags = var.tags
}
