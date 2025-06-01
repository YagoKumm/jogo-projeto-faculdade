import { Sala, Engine } from "./Basicas.js";
import { ChaveDeFenda } from "./ChaveDeFenda.js";

export class EntradaLaboratorio extends Sala {
    constructor(engine) {
        super("Entrada_do_Laboratorio", engine);
        const chave = new ChaveDeFenda();
        this.ferramentas.set(chave.nome, chave);
    }

    usa(ferramenta, objeto) {
        return false;
    }
}