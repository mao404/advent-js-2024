function fixPackages(packages: string): string {
  while (packages.includes("(")) {
    // Encuentra el último par de paréntesis abiertos y cerrados
    const lastOpenIndex = packages.lastIndexOf("(");
    const firstCloseIndex = packages.indexOf(")", lastOpenIndex);

    // Extrae el contenido dentro de los paréntesis
    const content = packages.slice(lastOpenIndex + 1, firstCloseIndex);

    // Voltea el contenido
    const reversedContent = content.split("").reverse().join("");

    // Reemplaza el par de paréntesis y su contenido con el contenido volteado
    packages =
      packages.slice(0, lastOpenIndex) +
      reversedContent +
      packages.slice(firstCloseIndex + 1);
  }

  return packages;
}
