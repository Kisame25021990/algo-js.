// Fonction qui renvoie un entier aléatoire entre 1 et 10
function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

// Programme qui affiche le résultat
console.log("Résultat de rand10() : " + rand10());
