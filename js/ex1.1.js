// Déclaration des variables
let size = 185;
let weight = 80;

// Test simple : adulte
if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are an adult");
}

// Test avec else
if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are an adult");
} else {
  console.log("You probably are a child");
}

// Test complet avec else if et else
if ((size >= 150) || (weight >= 45)) {
  console.log("You probably are an adult");
} else if ((size >= 50) || (weight >= 10)) {
  console.log("You probably are a child");
} else {
  console.log("You probably are a baby");
}

// Boucle while : affiche les nombres de 1 à 100
let i = 1;
while (i <= 100) {
  console.log(i);
  i += 1;
}

// Boucle for : affiche aussi les nombres de 1 à 100
for (let i = 1; i <= 100; i += 1) {
  console.log(i);
}



























