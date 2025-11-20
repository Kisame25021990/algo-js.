while (true) {
    let number = prompt("Quel est ton nombre préféré ?");
    
    if (Number(number) === 42) {
      alert("Bravo, tu as trouvé 42 !");
      break; // on arrête la boucle
    } else {
      alert("Are you sure?");
    }
  }
  