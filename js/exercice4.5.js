/**
 * calcDistanceAB - Calcule la distance euclidienne entre deux points en 2D.
 *
 * @param {number[]} pointA - Coordonnées du premier point [x1, y1].
 * @param {number[]} pointB - Coordonnées du second point [x2, y2].
 * @returns {number} La distance entre pointA et pointB arrondie à 2 décimales.
 *
 * @exemple
 * calcDistanceAB([1, 1], [2, 2]); // retourne 1.41
 * calcDistanceAB([1, 1], [3, 1]); // retourne 2
 * calcDistanceAB([4, 1], [1, 1]); // retourne 3
 * calcDistanceAB([-2, 2], [2, -2]); // retourne 5.65
 */
function calcDistanceAB(pointA, pointB) {
  const x1 = pointA[0];
  const y1 = pointA[1];
  const x2 = pointB[0];
  const y2 = pointB[1];

  const dx = x2 - x1;
  const dy = y2 - y1;

  const distance = Math.sqrt(dx * dx + dy * dy);
  return Number(distance.toFixed(2)); // arrondi à 2 décimales
}

// ✅ Programme de test
console.log(calcDistanceAB([1, 1], [2, 2]));   // 1.41
console.log(calcDistanceAB([1, 1], [3, 1]));   // 2
console.log(calcDistanceAB([4, 1], [1, 1]));   // 3
console.log(calcDistanceAB([-2, 2], [2, -2])); // 5.65
