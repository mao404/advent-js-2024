function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map((name) => name.length));

  const width = maxLength + 4;

  const topAndBottom = "*".repeat(width);

  const framedNames = names.map((name) => `* ${name.padEnd(maxLength)} *`);

  return [topAndBottom, ...framedNames, topAndBottom].join("\n");
}
