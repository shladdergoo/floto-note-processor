variable "label" {
  description = "A programatically readable label given to the function"
}

variable "name" {
  description = "The name of the lambda function"
}

variable "description" {
  description = "The description of the lambda function"
}

variable "account_id" {
  description = "The account holding the ECR repo that serves the image"
}

variable "region" {
  description = "The region holding the ECR repo that serves the image"
}

variable "image_name" {
  description = "The name of the image run by the function"
}

variable "image_tag" {
  description = "The tag of the image fun by the function"
}
