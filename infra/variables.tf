variable "region" {
  default = "eu-west-1"
}

variable "env" {}

variable "tags" {}

variable "app_name" {
  default = "floto"
}

variable "vpc_cidr" {
  default = "172.30.0.0/16"
}

variable "vpc_private_subnets" {
  default = ["172.30.0.0/19", "172.30.32.0/19"]
}

variable "vpc_public_subnets" {
  default = ["172.30.96.0/19", "172.30.128.0/19"]
}

variable "vpc_azs" {
  default = ["eu-west-1a", "eu-west-1b"]
}

variable "dynamodb_table_name" {
  default = "note"
}

variable "dynamodb_partition_key" {
  default = "NoteID"
}
