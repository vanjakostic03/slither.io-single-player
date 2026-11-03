function getRandomIntInclusive(min, max, power = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(
        min + (max - min + 1) * Math.pow(Math.random(), power)
    );
}

function isTooCloseToSnake(x,y, threshold) {                   
    const dx = x - snake.x;
    const dy = y - snake.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < threshold;
}
