"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = void 0;
const itemTypes_1 = require("./itemTypes");
exports.items = [
    {
        name: "Steel Battleaxe",
        type: itemTypes_1.ItemType.Weapon,
        damage: 50,
        durability: 100,
        price: 900,
    },
    {
        name: "Greater Healing Potion",
        type: itemTypes_1.ItemType.Potion,
        damage: 0,
        durability: 100,
        price: 100,
    },
    {
        name: "Heavy Chainmail",
        type: itemTypes_1.ItemType.Armor,
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
//# sourceMappingURL=items.js.map