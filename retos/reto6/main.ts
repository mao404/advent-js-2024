function inBox(box: string[]): boolean {
  // Itirate and ignore first and last row
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i];
    // Find it there is "*" in the middle of the row
    if (row.indexOf("*") > 0 && row.indexOf("*") < row.length - 1) {
      return true;
    }
  }
  return false;
}
