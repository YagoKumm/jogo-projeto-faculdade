import { Engine } from "./Basicas.js";
import { EntradaLaboratorio } from "./Salas/EntradaLaboratorio.js";
import { SalaDeExperimentos } from "./Salas/SalaDeExperimentos.js";
import { EscritorioCientista } from "./Salas/EscritorioCientista.js";
import { SalaDeControle } from "./Salas/SalaDeControle.js";

export class JogoLaboratorio extends Engine {
    constructor() {
        super();
    }

    criaCenario() {
        const entrada = new EntradaLaboratorio(this);
        const experimento = new SalaDeExperimentos(this);
        const escritorio = new EscritorioCientista(this);
        const controle = new SalaDeControle(this);

        entrada.portas.set(experimento.nome, experimento);
        experimento.portas.set(entrada.nome, entrada);
        experimento.portas.set(escritorio.nome, escritorio);
        escritorio.portas.set(experimento.nome, experimento);
        escritorio.portas.set(controle.nome, controle);
        controle.portas.set(escritorio.nome, escritorio);

        this.salaCorrente = entrada;
    }
}