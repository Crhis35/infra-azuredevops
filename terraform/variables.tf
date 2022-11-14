variable "location" {
  description = "The Azure Region in which all resources groups should be created."
}
variable "cg_name" {
  description = "The name of the Azure container group"
}

variable "rg-name" {
  description = "The name of the resource group"
}

variable "imagebuild" {
  type        = string
  description = "the latest image build version"
}
