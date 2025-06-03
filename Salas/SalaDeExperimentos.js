import { Sala, Engine } from "../Basicas.js";
import { ArmarioTrancado } from '../Objetos/ArmarioTrancado.js';
import { PainelEletrico } from "../Objetos/PainelEletrico.js";

export class SalaDeExperimentos extends Sala {
    constructor(engine) {
        super("Sala_de_Experimentos", engine);
        this.objetos.set("armario_trancado", new ArmarioTrancado(engine));
        this.objetos.set("painel_eletrico", new PainelEletrico());
    }

    usa(ferramenta, objeto) {
        if (!this.engine.mochila.tem(ferramenta) || !this.objetos.has(objeto)) return false;
        return this.objetos.get(objeto).usar(this.engine.mochila.pega(ferramenta));
    }
}