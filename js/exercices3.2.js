function moyennne(arr) {
    let sum = 0;
    for (let nombre of arr) {
        sum += nombre;
    }
    return sum / arr.length;
}
console.log(moyennne([1,2,3,4,5])); // 3
console.log(moyennne([100,101,102])); // 101

    