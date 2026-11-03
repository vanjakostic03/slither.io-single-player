function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isTooCloseToSnake(x,y, threshold) {                   
    const dx = x - snake.x;
    const dy = y - snake.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < threshold;
}