function createXmasTree(height: number, ornament: string): string {
  let tree = "";

  // Construir las líneas de los triángulos
  for (let i = 1; i <= height; i++) {
    const stars = ornament.repeat(2 * i - 1); // El número de estrellas por fila es 2*i - 1
    const spaces = "_".repeat(height - i); // Los espacios a la izquierda para centrar la fila

    tree += spaces + stars + spaces + "\n"; // Se concatena la línea con saltos de línea
  }

  // Añadir el tronco
  const trunkSpaces = "_".repeat(height - 1); // Los espacios a la izquierda del tronco
  tree += trunkSpaces + "#" + trunkSpaces + "\n"; // Primera línea del tronco
  tree += trunkSpaces + "#" + trunkSpaces; // Segunda línea del tronco

  return tree;
}
