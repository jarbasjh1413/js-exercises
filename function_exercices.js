/*[X] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou
const number = 3
const printNumber = number => {
    for (let i = 1; i <= number; i++) {
        console.log(i)
    }
}
printNumber(number)
[X] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
const timeTables = number => {
    if (number >= 1 && number <= 10) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} X ${i} = ${i*number}`)
        }
    } else console.log("Número inválido, tente um número de 1 até 10")
}

timeTables(5)
[X] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 
const printHour = () => {
    let hour = new Date();
    console.log(hour.getHours(), hour.getMinutes())
}

printHour()

[X] Escreva um programa onde, você chame uma função, e ela diga que ano estamos! 
const printCurrentYear = () => {
    let hour = new Date();
    console.log('estamos no ano de ' + hour.getUTCFullYear())
}

printCurrentYear()
[X] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior
const compareNumbers = (number1, number2) => {
    let biggerNumber;

    if (number1 > number2) {
        biggerNumber = number1;
    } else { biggerNumber = number2 }
    return biggerNumber;
}

console.log('o número maior é ', compareNumbers(5, 6))
[X] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: 
- média do salário da população; - média do número de filhos; 
- maior salário; 
- O final da leitura de dados se dará com a entrada de um salário negativo.
 - Faça isso usando uma função!

 const pesquisar = peoplesArray => {


    let totalWage = 0,
        totalSons = 0,
        highestWage = 0
    for (let people of peoplesArray) {

        totalWage += people.wage
        totalSons += people.sons
        if (people.wage > highestWage) {
            highestWage = people.wage

        }
        if (people.wage < 0) {
            break;
        }

    }

    let mediaWage = Math.floor(totalWage / peoplesArray.length);
    let mediaSons = Math.floor(totalSons / peoplesArray.length);

    console.log(`A média de salário da população é ${mediaWage} e a média do número de filhos é ${mediaSons}\ne o maior salário  é de ${highestWage}`)





}

pesquisar(peoples);

[X] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

- Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investido
- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.
const calculateInterestRate = (initValue, actualInvest, timeBased) => {
    let interestRate = ((actualInvest - initValue) / (initValue * timeBased) * 100).toFixed(2)

    interestRate = `${interestRate}%`
    return interestRate

}
console.log(calculateInterestRate(50, 100, 12))

[X] Escreva um programa onde, você cria uma função geradora de desconto. 

- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma: 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto     

    - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 

    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

    - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

   - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

   - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 

   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
- A função deve imprimir na tela: 

    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.       

    - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.

let generateDiscount = (nameClient, totalPurchase, firstPurchase, inCash) => {

    let discount = 0,
        receiveDiscont = true,
        purchaseDiscont = 0,
        discountPercentage = 0

    if (firstPurchase) {
        if (inCash) {
            if (totalPurchase >= 1000) {
                discount = totalPurchase * 0.3
                discountPercentage = 0.3 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else if (totalPurchase < 1000 && totalPurchase >= 500) {
                discount = totalPurchase * 0.25
                discountPercentage = 0.25 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else {
                discount = totalPurchase * 0.20
                discountPercentage = 0.20 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            }
        } else {
            if (totalPurchase >= 1000) {
                discount = totalPurchase * 0.2
                discountPercentage = 0.2 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else if (totalPurchase < 1000 && totalPurchase >= 500) {
                discount = totalPurchase * 0.15
                discountPercentage = 0.15 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else {
                discount = totalPurchase * 0.1
                discountPercentage = 0.1 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            }
        }
    } else {
        if (inCash) {
            if (totalPurchase >= 1000) {
                discount = totalPurchase * 0.2
                discountPercentage = 0.2 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else if (totalPurchase < 1000 && totalPurchase >= 500) {
                discount = totalPurchase * 0.15
                discountPercentage = 0.15 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else {
                discount = totalPurchase * 0.1
                discountPercentage = 0.1 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            }
        } else {
            if (totalPurchase >= 1000) {
                discount = totalPurchase * 0.1
                discountPercentage = 0.1 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else if (totalPurchase < 1000 && totalPurchase >= 500) {
                discount = totalPurchase * 0.05
                discountPercentage = 0.05 * 100 + "%"
                purchaseDiscont = totalPurchase - discount
            } else {
                discountPercentage = Math.round((Math.random() * (20 - 15) + 15)) + "%"
                receiveDiscont = false
            }

        }

    }

    if (receiveDiscont) {
        console.log(`Muito Obrigado por compra conosco Sr/Sra ${nameClient}, valor sem desconto= R$ ${totalPurchase}\nValor total com desconto de ${discountPercentage} aplicado = R$ ${purchaseDiscont}`)
    } else {
        console.log(`Muito Obrigado por compra conosco Sr/Sra ${nameClient}, valor total da compra = R$ ${totalPurchase}\nVocê ganhou um copom de ${discountPercentage} para a próxima compra`)
    }

}

generateDiscount("Jarbas", 499, false, false)
*/