const prompt = require("prompt-sync")();

class ItemMagico {
 
  constructor(tipo, dano, resistencia) {
        this.tipo = tipo;  
        this.dano = dano; 
        this.resistencia = resistencia;  
    }

     calcularDano() {
         return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}

 const tipoItem = prompt("Qual o tipo do item (Espada, Cajado, Arco): ");
const danoItem = parseInt(prompt("Qual o dano do item: "));
const resistenciaItem = parseInt(prompt("Qual a resistência do item: "));

 const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Imprime os atributos do item personalizado
console.log("Tipo: " + itemPersonalizado.tipo);
console.log("Dano: " + itemPersonalizado.dano);
console.log("Resistência: " + itemPersonalizado.resistencia);

 const danoTotal = itemPersonalizado.calcularDano();
console.log("Dano em combate: " + danoTotal);
