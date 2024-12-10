type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  const result: { [category: string]: { [name: string]: number } } = {};

  inventory.forEach((item) => {
    const { name, quantity, category } = item;

    // If category doesn't exist in the result, we create it
    if (!result[category]) {
      result[category] = {};
    }

    // If the toy it's already registered in the category, we add the quantity
    // Else initial value
    if (result[category][name]) {
      result[category][name] += quantity;
    } else {
      result[category][name] = quantity;
    }
  });

  return result;
}
