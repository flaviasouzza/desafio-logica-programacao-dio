 

const prompt = require("prompt-sync")();

let nomeEntrada = prompt();

function combinandoNomesPokemons(palavra) {
    let palavraPokemon = palavra + "saur";  
    return palavraPokemon; 
}

 let palavraGerada = combinandoNomesPokemons(nomeEntrada);

console.log(palavraGerada);