// Fonction existante
function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

// Nouvelle fonction
function multiRand(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
  }
  return arr;
}

// Programme principal
let n = parseInt(prompt("How many random numbers do you want?"));
let numbers = multiRand(n);
console.log("Generated numbers: " + numbers);
