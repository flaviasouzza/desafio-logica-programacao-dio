const prompt = require("prompt-sync")();

class Heroi {
    constructor(nome, tipo) {
        this.nome = nome;  
        this.tipo = tipo.toLowerCase();  
    }
   
    modoAtaque () {
        if (this.tipo === "mago") {
            console.log("O " + this.tipo + " atacou usando magia");
        }
        else if (this.tipo === "guerreiro") {
            console.log("O " + this.tipo + " atacou usando espada");
        }
        else if (this.tipo === "monge") {
            console.log("O " + this.tipo + " atacou usando artes marciais");
        }
        else if (this.tipo === "ninja") {
            console.log("O " + this.tipo + " atacou usando shuriken");
        }
    }
}

function obterTipoHeroi() {
    const opcoesValidas = ["mago", "guerreiro", "monge", "ninja"];
    let tipo;

    do {
        console.log("\nSelecione o tipo do herói:");
        console.log("Mago");
        console.log("Guerreiro");
        console.log("Monge");
        console.log("Ninja");

        const escolha = prompt("Qual a opção escolhida: ").toLowerCase();

        if (opcoesValidas.includes(escolha)) {
            tipo = escolha;
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    } while (!tipo);

    return tipo;
}

const nomeHeroi = prompt("Qual o nome do herói: ");
const heroiTipo = obterTipoHeroi();

const heroi = new Heroi(nomeHeroi, heroiTipo);
heroi.modoAtaque();
