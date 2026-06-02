// Fonction 1 : Trouver le maximum 
function findMaximum(arr) {
  return Math.max(...arr);
}

// Fonction 2 : Trouver le minimum 
function findMinimum(arr) {
  return Math.min(...arr);
}

console.log("MAXIMUM & MINIMUM");
let numbers = [3, 7, 1, 9, 4, 15, 2];
console.log("Tableau :", numbers);
console.log("Maximum :", findMaximum(numbers));  
console.log("Minimum :", findMinimum(numbers));  

// Fonction 3 : Somme d'un tableau 
function sumArray(arr) {
  return arr.reduce(acc, curr);
}

console.log("SUM OF ARRAY");
console.log("Tableau :", numbers);
console.log("Somme :", sumArray(numbers));  
console.log("Somme [1,2,3,4,5] :", sumArray([1, 2, 3, 4, 5]));  

// Fonction 4 : Filtrer un tableau 
function filterArray(arr, condition) {
  return arr.filter(condition);
}

console.log(" FILTER ARRAY");
let pairs = filterArray(numbers, num => num % 2 === 0);
console.log("Nombres pairs :", pairs);  

let grandsNombres = filterArray(numbers, num => num > 5);
console.log("Nombres > 5 :", grandsNombres);  

let negatifs = filterArray([-3, 5, -1, 8, -7, 2], num => num < 0);
console.log("Nombres négatifs :", negatifs);  