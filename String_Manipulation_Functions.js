// Fonction 1 : Inverser une chaîne 
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Bonjour"));   // ruojnoB
console.log(reverseString("Programmation"));  // kniLorgA
console.log(reverseString("Dakar"));     // rakaD

//  Fonction 2 : Compter les caractères 
function countCharacters(str) {
  return str.length;
}
console.log(countCharacters("Bonjour"));       // 7
console.log(countCharacters("Intelligence"));  // 12
console.log(countCharacters(""));              // 0

// Fonction 3 : Capitaliser chaque mot
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("bonjour tout le monde"));  // Bonjour Tout Le Monde
console.log(capitalizeWords("intelligence artificielle")); // Intelligence Artificielle
console.log(capitalizeWords("dakar sénégal afrique"));  // Dakar Sénégal Afrique