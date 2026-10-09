import { Item, ItemType } from "./itemTypes";

export const items: Item[] = [
  {
    name: "Steel Battleaxe",
    type: ItemType.Weapon,
    damage: 50,
    durability: 100,
    price: 900,
  },
  {
    name: "Greater Healing Potion",
    type: ItemType.Potion,
    damage: 0,
    durability: 100,
    price: 100,
  },
  {
    name: "Heavy Chainmail",
    type: ItemType.Armor,
    damage: 0,
    durability: 200,
    price: 1500,
  },
];

// export interface Item {
//   name: string;
//   type: ItemType;
//   damage: number;
//   durability: number;
//   price: number;
// }
