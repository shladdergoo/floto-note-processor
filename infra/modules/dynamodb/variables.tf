variable "label" {
  description = "A programatically readable label given to the table"
}

variable "table_name" {
  description = "The name of the DynamoDB table"
}

variable "partition_key" {
  description = "The name of a String valued hash (partition) key"
}

variable "tags" {
  type = map(any)
}
