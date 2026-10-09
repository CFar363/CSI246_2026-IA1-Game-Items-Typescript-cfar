export enum ItemType {
  Weapon,
  Armor,
  Potion,
}

export interface Item {
  name: string;
  type: ItemType;
  damage: number;
  durability: number;
  price: number;
}
