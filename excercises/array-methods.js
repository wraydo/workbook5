"use strict"

let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];
//a. Write code that transforms the cart array using the map()function to return only the item name 
let itemNames = cart.map(function (item) {
    return item.item;
  });
  console.log(itemNames)

//and then use forEach() to display the list of items.

cart.forEach(function (item) {
    console.log(item.item);
  });


  itemNames.forEach(function (itemName) {
    console.log(itemName);
  });



