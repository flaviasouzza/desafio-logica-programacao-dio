// Desafio Classificador Nível Heroi 
    const prompt = require("prompt-sync")();

    while(true) { 
    
    let nome = prompt("Digite o nome do personagem:");
    let nivel_heroi = Number(prompt("Digite o valor do nível atual: "));

   
    if (isNaN(nivel_heroi) || nivel_heroi < 0) {
        console.log("Por favor, insira um número válido para o nível.");
        continue;  
    }

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

    let verificarOutroNivel = prompt("Gostaria de verificar o nível de mais algum herói? [S/N]: ");

     if (verificarOutroNivel.trim().toLowerCase() === 'n') {
        console.log("Verificações finalizadas, volte pro jogo!");
        break;   

    } else if (verificarOutroNivel.trim().toLowerCase() === 's') {
        console.log("Vamos nessa...");

    } else {
        console.log("Entrada inválida! Por favor, digite 'S' ou 'N'.");
    }
}