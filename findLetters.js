function findFirstLetter(letters) {
  if (!letters || letters.length === 0) return 

  let minLetter = letters[0];

  letters.forEach((letter) =>{
    if (letter < minLetter)  minLetter = letter;
  });

  return minLetter;
}

const input = ['G', 'H', 'E', 'Z', 'Y'];
const output = findFirstLetter(input);

console.log(output); //E