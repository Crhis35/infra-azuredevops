
terraform {
  backend "azurerm" {
    resource_group_name  = "rg-terraform-infraapp"
    storage_account_name = "devinfraapp7317"
    container_name       = "infraapp"
    key                  = "terraform.tfstate"
  }
}
