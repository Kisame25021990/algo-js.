function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let elem of arr) {
      if (elem < min) {
        min = elem;
      }
      if (elem > max) {
        max = elem;
      }
    }
  
    console.log("Minimum:", min);
    console.log("Maximum:", max);
  }
  
  // Test
  minMax([3, 7, 2, 9, 5]); 
  // Minimum: 2
  // Maximum: 9
  






















































































