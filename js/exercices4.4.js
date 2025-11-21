// Ton tableau de l'exercice 3.0
let Learner = [ 
  "Abdoul", "Dimitri", "Isaac", "Jason", "Jonathan",
  "Lindsay","Lucas","Leandre","Mathias","Thomas",
  "Enrique","Dorian","Ethan","Johan","Julien","Kev",
];

// Fonction pickLearner
function pickLearner(inputAr, n) {
  let selected = [];
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * inputAr.length);
    selected.push(inputAr[randomIndex]);
  }
  return selected;
}

// Programme principal
let n = parseInt(prompt("Combien d'apprenants veux-tu sélectionner ?"));
let chosen = pickLearner(Learner, n);

console.log("Apprenants choisis : " + chosen);





  