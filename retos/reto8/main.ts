function drawRace(indices: number[], length: number): string {
  const draws = indices.map((reindeer, index) => {
    const draw = "~".repeat(length).split("");

    if (reindeer !== 0) {
      const position = reindeer > 0 ? reindeer : length + reindeer;
      draw[position] = "r";
    }

    const spaces = indices.length - index - 1;
    return draw.join("").padStart(length + spaces) + ` /${index + 1}`;
  });

  return draws.join("\n");
}
