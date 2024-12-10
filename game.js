function createGame() {
  function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  let minGuess = 1;
  let maxGuess = 100;
  const hiddenNumber = randomInteger(minGuess, maxGuess);
  let currentGuess = null;
  let attemptCount = 1;
  let log = `Компьютер 1 загадал число: ${hiddenNumber}\n\n`;

  while (hiddenNumber !== currentGuess) {
    currentGuess = Math.trunc((minGuess + maxGuess) / 2);
    log += `Попытка №${attemptCount}.\n`;
    log += `Компьютер 2: Пробую число ${currentGuess}.\n`;

    if (currentGuess === hiddenNumber) {
      log += `Компьютер 1: Угадал!\n\n`;
      break;
    } else if (currentGuess > hiddenNumber) {
      maxGuess = currentGuess - 1;
      log += `Компьютер 1: Меньше.\n\n`;
    } else {
      minGuess = currentGuess + 1;
      log += `Компьютер 1: Больше.\n\n`;
    }

    attemptCount++;
  }

  log += `Компьютер 2 угадал число за ${attemptCount} попыток.`;
  console.log(log);
}

createGame();
