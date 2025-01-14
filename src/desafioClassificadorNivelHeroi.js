/* Primeira parte
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo: */

/* let nome = "Harry Potter"
let XP = ""
*/
    const prompt = require("prompt-sync")();

    let nome = prompt("Digite o nome do personagem:");
    let nivel_heroi = Number(prompt("Digite o valor do nível atual: "));

    console.log("O nome do personagem é: " + nome);
    console.log ("O valor do nível atual do personagem é: " + nivel_heroi);

    if (nivel_heroi <= 1000) {
        console.log("O herói " + nome + " está no nível Ferro.");
    }
    else if (nivel_heroi > 1000 && nivel_heroi <= 2000) {
        console.log("O herói " + nome + " está no nível Bronze.");
    }
    else if (nivel_heroi > 2001 && nivel_heroi <= 5000){
        console.log("O herói " + nome + " está no nível Prata.");
    }
    else if (nivel_heroi > 5001 && nivel_heroi <= 7000){
        console.log("O herói " + nome + " está no nível Ouro.");
    }
    else if (nivel_heroi > 7001 && nivel_heroi <= 8000){
        console.log("O herói " + nome + " está no nível Platina.");
    }
    else if (nivel_heroi > 8001 && nivel_heroi <= 9000){
        console.log("O herói " + nome + " está no nível Ascendente.");
    }
    else if (nivel_heroi > 9001 && nivel_heroi <= 10000){
        console.log("O herói " + nome + " está no nível Imortal.");
    }
    else  {
        console.log("O herói " + nome + " está no nível Radiante.");
    }

