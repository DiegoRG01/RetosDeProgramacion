/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let numbers: number[] = [];
for (let i = 0; numbers.length < 50; i++) {
  if (i == 0) {
    numbers.push(0);
    continue;
  } else if (i == 1) {
    numbers.push(1);
    continue;
  }

  numbers.push(numbers[i - 1] + numbers[i - 2]);
}

console.log(numbers);
