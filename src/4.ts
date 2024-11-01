/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

let numbersPrime: number[] = [];
for (let i = 1; i <= 100; i++) {
  if (i > 2 && esPrimo(i)) {
    numbersPrime.push(i);
  }
}

console.log(numbersPrime);

function esPrimo(numero: number): boolean {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
