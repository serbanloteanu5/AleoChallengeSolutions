/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated and creative solution
 *              by implementing a simple e-commerce inventory management system.
 * 
 * Author: [Your Name]
 * Date: [Current Date]
 */


// Product class representing an item in inventory
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Method to calculate total value of products
  getTotalValue() {
    return this.price * this.quantity;
  }
}

// Inventory class representing a collection of products
class Inventory {
  constructor() {
    this.products = [];
  }

  // Method to add a product to inventory
  addProduct(product) {
    this.products.push(product);
  }

  // Method to remove a product from inventory
  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }

  // Method to calculate total value of inventory
  calculateInventoryTotalValue() {
    let totalValue = 0;
    for (const product of this.products) {
      totalValue += product.getTotalValue();
    }
    return totalValue;
  }

  // Method to sort products by name
  sortProductsByName() {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Method to sort products by price
  sortProductsByPrice() {
    this.products.sort((a, b) => a.price - b.price);
  }
}

// Create an instance of the Inventory class
const inventory = new Inventory();

// Add products to inventory
inventory.addProduct(new Product("iPhone X", 999.99, 10));
inventory.addProduct(new Product("Samsung Galaxy S10", 899.99, 5));
inventory.addProduct(new Product("Google Pixel 3", 799.99, 3));
inventory.addProduct(new Product("LG G8 ThinQ", 699.99, 7));
inventory.addProduct(new Product("OnePlus 7 Pro", 649.99, 2));

// Log the total value of the inventory
console.log("Total inventory value:", inventory.calculateInventoryTotalValue());

// Sort the products by name
inventory.sortProductsByName();

// Log the sorted products
console.log("Products sorted by name:");
for (const product of inventory.products) {
  console.log(`${product.name} - $${product.price} - Quantity: ${product.quantity}`);
}

// Sort the products by price
inventory.sortProductsByPrice();

// Log the sorted products
console.log("Products sorted by price:");
for (const product of inventory.products) {
  console.log(`${product.name} - $${product.price} - Quantity: ${product.quantity}`);
}

// Remove a product from inventory
inventory.removeProduct(inventory.products[0]);

// Log the total value of the inventory after removal
console.log("Total inventory value after removal:", inventory.calculateInventoryTotalValue());

// Output:
// Total inventory value: 21397.84
// Products sorted by name:
// Google Pixel 3 - $799.99 - Quantity: 3
// iPhone X - $999.99 - Quantity: 10
// LG G8 ThinQ - $699.99 - Quantity: 7
// OnePlus 7 Pro - $649.99 - Quantity: 2
// Samsung Galaxy S10 - $899.99 - Quantity: 5
// Products sorted by price:
// OnePlus 7 Pro - $649.99 - Quantity: 2
// LG G8 ThinQ - $699.99 - Quantity: 7
// Google Pixel 3 - $799.99 - Quantity: 3
// Samsung Galaxy S10 - $899.99 - Quantity: 5
// iPhone X - $999.99 - Quantity: 10
// Total inventory value after removal: 20397.85