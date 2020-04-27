let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    // eslint-disable-next-line no-continue
    continue;
  } else numbers.push(input);

  console.log(numbers);
  total += input;
  // eslint-disable-next-line no-constant-condition
} while (true);

console.log(`Общая сумма ${total}`);
