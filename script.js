function getRandomNumbers() {
  let numbers = [];

  while (numbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

document.getElementById('button').addEventListener('click', function() {
  let numbers = getRandomNumbers();
  document.getElementById('numbers').innerHTML = numbers.join(' ');
});

