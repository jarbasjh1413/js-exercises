/* [X] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"
const number = 2

if (number > 10) {
    console.log(+number + " é maior do que 10")
} else if (number < 10) {
    console.log(+number + " é menor do que 10")
} else {
    console.log(+number + " é igual 10")
}
[X] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
const person = {
    nacionality: "Brasileira"
}

if (person.nacionality === "Brasileira") { console.log("Brasileiro") };
[X] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.
const number = 4;
const randomNumber = Math.round(Math.random() * (10 - 1) + 1)
randomNumber === number ? console.log(number + " é igual a " + randomNumber + " parabénsss") : console.log("não foi dessa vez");

[X] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
const numbers = [3, 2, 5]

if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
    console.log(numbers[0] + " é o maior número")
} else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
    console.log(numbers[1] + " é o maior número")
} else {
    console.log(numbers[2] + " é maior")
}

if (numbers[0] < numbers[1] && numbers[0] < numbers[2]) {
    console.log(numbers[0] + " é o menor número")
} else if (numbers[1] < numbers[0] && numbers[1] < numbers[2]) {
    console.log(numbers[1] + " é o menor número")
} else {
    console.log(numbers[2] + " é menor")
}

[X] Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const peoples = [
    { nome: "Jarbas", idade: "20", sexo: "M", profissão: "Developer", nacionalidade: "Brasileira" },
    { nome: "João", idade: "30", sexo: "M", profissão: "Jogador", nacionalidade: "Brasileira" },
    { nome: "Ricardo", idade: "36", sexo: "M", profissão: "Pedreiro", nacionalidade: "Turco" },
    { nome: "Valdirene", idade: "19", sexo: "F", profissão: "Cabelereira", nacionalidade: "Argentina" },
    { nome: "Rosi", idade: "22", sexo: "F", profissão: "Enfermeira", nacionalidade: "Brasileira" },
]

for (let propiety of peoples) {
    if (propiety.idade >= 18 && propiety.nacionalidade === "Brasileira") {
        console.log(propiety.nome + " Está aprovado")
    }
}

[X] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
const note = 9

switch (note) {
    case 1:
        console.log(note + " Péssimo")
        break
    case 2:
        console.log(note + " Horrível")
        break
    case 3:
        console.log(note + " Muitom ruim")
        break
    case 4:
        console.log(note + " Ruim")
        break
    case 5:
        console.log(note + " Mediano")
        break
    case 6:
        console.log(note + " Aceitável")
        break
    case 7:
        console.log(note + " Bom")
        break
    case 8:
        console.log(note + "Muito bom")
        break
    case 9:
        console.log(note + " Excelente")
        break
    case 10:
        console.log(note + " Melhor de todos, parabéns")
        break

}

[X] Faça um programa onde leia um numero e diga se ele é par ou impar.

const number = 8

number % 2 == 0 ? console.log(number + " é par") : console.log(number + " é impar")

[X] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const number = 7;

if (number % 2 == 0 && number % 5 == 0) {
    console.log(number + " par divisivel por 5")
} else if (number / number == 0 || number / 1 == number && number % 2 != 0) {
    console.log(number + " Número primo e impar")
} else if (number % 2 == 0) {
    console.log(number + " Apenas par")
} else {
    console.log(number + " Apenas ímpar")

}

[X] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares. 

const numbers = [2, 4, 8, 10]

let answer = ""


if (numbers[0] % 2 == 0 && numbers[1] % 2 == 0 && numbers[2] % 2 == 0 && numbers[3] % 2 == 0) {

    answer = "TODOS OS NÚMEROS SÃO PARES"
} else if (numbers[0] % 2 != 0 && numbers[1] % 2 != 0 && numbers[2] % 2 != 0 && numbers[3] % 2 != 0) {
    answer = "TODOS OS NÚMEROS SÃO IMPARES"
}



switch (answer) {

    case "TODOS OS NÚMEROS SÃO PARES":

        console.log("TODOS OS NÚMEROS SÃO PARES")
        break;

    case "TODOS OS NÚMEROS SÃO IMPARES":

        console.log("TODOS OS NÚMEROS SÃO ÍMPARES")
        break;
    default:

        console.log("OS NÚMERO SÃO PARES E ÍMSPARES")

}
*/