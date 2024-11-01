/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagrama(palabra1: string, palabra2: string): boolean {
  if (palabra1 === palabra2 || palabra1.length != palabra2.length) {
    return false;
  }

  let letrasPalabra1: string[] = [];
  for (let i = 0; i <= palabra1.length - 1; i++) {
    letrasPalabra1.push(palabra1.toUpperCase().charAt(i));
  }

  let letrasPalabra2: string[] = [];
  for (let i = 0; i <= palabra2.length - 1; i++) {
    letrasPalabra2.push(palabra2.toUpperCase().charAt(i));
  }

  let diferencias = letrasPalabra1.filter(
    (item) => letrasPalabra2.indexOf(item) < 0
  );

  if (diferencias.length == 0) {
    return true;
  }

  return false;
}
