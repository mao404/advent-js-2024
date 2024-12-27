type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const inventory = new Map<number, number>();
  const pairs: number[] = [];

  for (const shoe of shoes) {
    const count = inventory.get(shoe.size) || 0;

    if (shoe.type === "I") {
      // If there is an unmatched right shoe, form a pair
      if (count < 0) {
        pairs.push(shoe.size);
        inventory.set(shoe.size, count + 1);
      } else {
        // Otherwise, add the left shoe to inventory
        inventory.set(shoe.size, count + 1);
      }
    } else if (shoe.type === "R") {
      // If there’s an unmatched left shoe, form a pair
      if (count > 0) {
        pairs.push(shoe.size);
        inventory.set(shoe.size, count - 1);
      } else {
        // Otherwise, add the right shoe to inventory
        inventory.set(shoe.size, count - 1);
      }
    }
  }

  return pairs.sort((a, b) => a - b);
}
