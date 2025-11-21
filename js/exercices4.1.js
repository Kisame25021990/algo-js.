/**
 * calcSurface
 * Calcule la surface d’un rectangle en mètres.
 *
 * @param {Number} length - La longueur du rectangle
 * @param {Number} width - La largeur du rectangle
 * @returns {Number} La surface du rectangle (longueur × largeur)
 *
 * Exemple : calcSurface(5, 10) → 50
 */
function calcSurface(length, width) {
  return length * width;
}

// Appel de la fonction
let surface = calcSurface(5, 10);
console.log("La surface du rectangle est : " + surface);

module.exports = calcSurface;

