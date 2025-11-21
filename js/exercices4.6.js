/**
 * factorial - Calcule la factorielle d'un nombre de façon récursive
 *
 * @param {number} a - Le nombre dont on veut la factorielle
 * @returns {number} La factorielle de a
 *
 * @exemple
 * factorial(5); // retourne 120
 */
function factorial(a) {
  if (a <= 1) {
    return 1; // cas de base
  }
  return a * factorial(a - 1); // appel récursif
}

// ✅ Tests
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
