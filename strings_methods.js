let name="Ahsaan"
console.log(`The length of string is: ${name.length}`); // Get the length of the string

console.log(`String in upper case: ${name.toUpperCase()}`); // Convert all the letters into upper cases

console.log(`String in upper case: ${name.toLowerCase()}`); // Convert all the letters into lower cases

console.log(`String Slice: ${name.slice(1,5)}`); // Slice the particular part of string between given indexes

let name1="Ahsaan Iqbal"
console.log(`Name1 before: ${name1}`);
console.log(`Name1 after replace: ${name1.replace("Ahsaan","Faizan")}`); // Repalce the particular string in the string

let friend="Riz"
console.log(`${name.concat(` is a friend of `,friend)}`); // Concatenate the two strings

let person="       Shahid          ";
console.log(person.trim()); //Remove backward and afterward spaces

let sentence="There are beautiful mountain ranges in Pakistan";
let word="Pakistan";
console.log(`The ${word} ${sentence.includes(word)?'is':'is not'} in the sentence`); // To find the word in the string

console.log(sentence.startsWith("There")); // Returns true if the given word is found at the start else reutrns false

console.log(sentence.endsWith("Pakistan")); // Returns true if the given word is found at the end else reutrns false