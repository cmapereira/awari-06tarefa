//Exercício 06
const num = window.prompt('Digite um número inteiro: ');

console.log(`Tabuada de ${num}`);
for (i=1; i<=10; i++) {
    const resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
}