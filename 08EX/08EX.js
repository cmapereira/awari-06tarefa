//Exercício 08
//let arrayAges = [];
//let ageData = '';
//let soma = 0;

// for(i=0; i<5; i++){
//     ageData = window.prompt('Digite uma idade: ');
//     arrayAges.push(ageData);
// }

// console.log(arrayAges);

// for(i=0; i<arrayAges.length; i++) {
//     arrayAges[i] = parseInt(arrayAges[i]);
// }

// console.log(arrayAges)

// for(i=0; i<arrayAges; i++) {
//     soma += arrayAges[i];
// }

// console.log(soma);

// let media = soma / arrayAges.length;

// console.log('média = ', media)

const input = prompt('Digite idades separadas por vírgula: ');
const ages = input.split(',');

let total = 0;
for(i=0; i<ages.length; i++) {
    total += parseInt(ages[i]);
}

const media = total / ages.length;
console.log(`a média é ${media}`);