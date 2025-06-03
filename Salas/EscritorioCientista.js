import { Sala, Engine } from "../Basicas.js";
import { ComputadorEncriptado } from "../Objetos/ComputadorEncriptado.js";

export class EscritorioCientista extends Sala {
    constructor(engine) {
        super("Escritorio_do_Cientista", engine);
        this.objetos.set("computador", new ComputadorEncriptado());
    }

    usa(ferramenta, objeto) {
        if (!this.engine.mochila.tem(ferramenta) || !this.objetos.has(objeto)) return false;
        return this.objetos.get(objeto).usar(this.engine.mochila.pega(ferramenta));
    }
}