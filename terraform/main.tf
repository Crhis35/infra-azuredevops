resource "azurerm_resource_group" "resource_group" {
  name     = var.rg-name
  location = var.location
}


resource "random_integer" "ri" {
  min = 10000
  max = 99999
}

resource "azurerm_container_group" "tf_cg_infrapp" {
  name                = var.cg_name
  location            = azurerm_resource_group.resource_group.location #utilising the resource group
  resource_group_name = azurerm_resource_group.resource_group.name     #utilising the resource group

  ip_address_type = "Public"
  dns_name_label  = "crhistian-infraapp" #friendly name we want to give our domain
  os_type         = "Linux"

  # Specify the container information
  container {
    name   = var.cg_name
    image  = "crhistiancara/infraapp:${var.imagebuild}"
    cpu    = "1"
    memory = "1"

    ports {
      port     = 80
      protocol = "TCP"
    }
  }
}
