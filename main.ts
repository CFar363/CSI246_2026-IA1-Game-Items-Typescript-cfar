import { Item, ItemType } from "./itemTypes";
import { items } from "./items";

function listItem(item: Item): void {
  console.log(
    `Item details: Item is ${ItemType[item.type]}, ${item.name}. Damage: ${item.damage}. Durability: ${item.durability}. Price: ${item.price}. `,
  );
}
// console.log("main");
// console.log(items);

console.log("Inventory:");
items.forEach(listItem);

function compareByPrice(A: Item, B: Item): void {
  if (A.price > B.price) {
    console.log(`The ${A.name} is more expensive than the ${B.name}`);
  }
  if (B.price > A.price) {
    console.log(`The ${B.name} is more expensive than the ${A.name}`);
  }
  if ((A.price = B.price)) {
    console.log(`BOth items are the same price.`);
  }
}

const Item1 = items.find((item) => item.name === "Steel Battleaxe");
const Item2 = items.find((item) => item.name === "Greater Healing Potion");
compareByPrice(Item1!, Item2!);

console.log("Price-Increasing");
const pricesort1 = items.sort((a, b) => a.price - b.price);
console.log(pricesort1);

console.log("Price-Decreasing");
const pricesort2 = items.sort((a, b) => b.price - a.price);
console.log(pricesort2);
