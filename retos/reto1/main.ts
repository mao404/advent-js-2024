function prepareGifts(gifts: number[]): number[] {
  //Eliminar duplicados con el set
  const uniqueGifts = new Set<number>(gifts);

  const sortedGifts = Array.from(uniqueGifts).sort((a, b) => a - b);

  return sortedGifts;
}
