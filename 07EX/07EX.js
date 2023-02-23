//Exercício 07
const num = window.prompt('Digite um número inteiro: ');
const evenNum = [];
const oddNum = [];

for(i=1; i<=num; i++) {
    if (i % 2 === 0) {
        evenNum.push(i);
    } else {
        oddNum.push(i);
    }
}

console.log(`Numeros Pares: ${evenNum}`);
console.log(`Numeros Impares: ${oddNum}`);