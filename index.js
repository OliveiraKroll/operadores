// const primeiroValor = 3
// const segundoValor = 4
// const resultado = primeiroValor + segundoValor
// console.log(resultado)


// const primeiroValor = 3
// const segundoValor = 4
// const resultado = (primeiroValor * segundoValor) / 2
// console.log(resultado)


// const primeiroValor = 4
// const segundoValor = 5
// const resultado = (primeiroValor - segundoValor) * (-1)
// console.log(resultado)


// const primeiroValor = 234
// const segundoValor = 5
// const resultado = (primeiroValor % segundoValor)
// console.log(resultado)

//comparadores



// const primeiroNumero = 10
// const segundoNumero = 20
// console.log(primeiroNumero === segundoNumero); //false
// console.log(primeiroNumero != segundoNumero); //true
// console.log(primeiroNumero > segundoNumero); //false
// console.log(primeiroNumero >= segundoNumero); //false
// console.log(primeiroNumero < segundoNumero); //true
// console.log(primeiroNumero <= segundoNumero); //true


// const nome = prompt("Digite seu nome");
// const idade = Number(prompt("Digite sua idade"));
// const maiorDeIdade = idade > 18;
// const idadeEm2050 = (2050 - new Date().getFullYear()) + idade;

// console.log("nome", nome);
// console.log("idade", idade);
// console.log("É maior de idade", maiorDeIdade);
// console.log("Idade em 2050", idadeEm2050);






// interpretação 26/04

// exercício 1
// const bool1 = true//false
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado ) //false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) //false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) //true

// console.log("d. ", typeof resultado)


// exercício 2 e 3

// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))


// const soma = primeiroNumero + segundoNumero

// console.log(soma)


// respostas
// é impresso somente os dois números de forma repetida e não uma soma sem o acréscimo do Number.






// Exercicios escrita de código

//1
// const idadeUsuario = Number (prompt("Digite sua idade"))
// const idadeAmigo = Number (prompt ("Digite a idade do seu amigo"))

// const idadeMaior = idadeUsuario > idadeAmigo

// console.log("Sua idade é maior do que a do seu melhor amigo?",idadeMaior)

//2
// const numeroPar = Number (prompt("Digite um número par"))
// console.log(numeroPar % 2 === 0)



//3
// const idade = Number(prompt("Digite sua idade, em anos"))

// const idadeMeses= idade * 12

// const idadeDias = idade * 365

// const idadeHoras = idade * 365 * 24

// console.log(("Idade meses"),idadeMeses);
// console.log("Idade dias",idadeDias);
// console.log("Idade horas",idadeHoras);


const numero1 = Number(prompt("Digite um  número"))
const numero2 = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero2 === 0)


