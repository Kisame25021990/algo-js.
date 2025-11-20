let number;
do {
  number = parseInt(prompt("Enter your favorite number:"));
  if (number !== 42) {
    console.log("Are you sure?");
  }
} while (number !== 42);

console.log("Great choice! 42 is the answer to everything.");