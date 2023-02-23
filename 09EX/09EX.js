//Exercício 09

const data = prompt('Digite idades separadas por vírgula: ');
const arrayData = data.split(',');

let counter = 0;
for(i=0; i<arrayData.length; i++) {
    let age = parseInt(arrayData[i]);
    if (age >= 18) {
        counter ++;
    }
}

console.log('Maiores de idade:', counter);