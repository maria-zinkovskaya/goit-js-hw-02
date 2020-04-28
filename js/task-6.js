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

  // eslint-disable-next-line no-constant-condition
} while (true);

if (numbers.length === 0) {
  alert('Вы ничего не ввели, попробуйте еще раз');
} else {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}
console.log(`Общая сумма чисел равна ${total}`);
