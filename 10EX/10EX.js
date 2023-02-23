// Exercício 10

const data = prompt('Digite um número inteiro: ');

let resultado = '';
for(i=1; i<=data; i++) {
    for(j=1; j<=data; j++) {
        resultado += '*';
    }
    resultado += '\n';
}
console.log(resultado);