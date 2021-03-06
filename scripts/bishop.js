function bishopCheck({ whiteX, whiteY, blackX, blackY }) {
  let squares = [];
  let startingX, startingY;

  // top-left
  startingX = whiteX - 1;
  startingY = whiteY - 1;

  for (let x = startingX, y = startingY; x >= 0 && y >= 0; x--, y--) {
    let hit = x === blackX && y === blackY;

    squares.push({ x, y, hit });

    if (hit) break;
  }

  // top-right
  startingX = whiteX - 1;
  startingY = whiteY + 1;

  for (let x = startingX, y = startingY; x >= 0 && y < 8; x--, y++) {
    let hit = x === blackX && y === blackY;

    squares.push({ x, y, hit });

    if (hit) break;
  }

  // bottom-right
  startingX = whiteX + 1;
  startingY = whiteY + 1;

  for (let x = startingX, y = startingY; x < 8 && y < 8; x++, y++) {
    let hit = x === blackX && y === blackY;

    squares.push({ x, y, hit });

    if (hit) break;
  }

  // bottom-left
  startingX = whiteX + 1;
  startingY = whiteY - 1;

  for (let x = startingX, y = startingY; x < 8 && y >= 0; x++, y--) {
    let hit = x === blackX && y === blackY;

    squares.push({ x, y, hit });

    if (hit) break;
  }

  return squares;
}
