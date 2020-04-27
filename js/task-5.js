const checkForSpam = function(message) {
  let ad;
  const letter = message.toLowerCase();
  if (letter.includes('spam') || letter.includes('sale')) {
    ad = 'true';
  } else {
    ad = 'false';
  }
  return ad;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
