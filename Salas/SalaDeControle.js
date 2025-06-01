import { Sala, Engine } from "./Basicas.js";
import { PainelDeControle } from "./PainelDeControle.js";
import { CartaoDeAcesso } from "./CartaoDeAcesso.js";

export class SalaDeControle extends Sala {
    constructor(engine) {
        super("Sala_de_Controle", engine);
        this.objetos.set("painel_de_controle", new PainelDeControle(engine));
    }

    usa(ferramenta, objeto) {
        if (!this.engine.mochila.tem(ferramenta)) return false;
        if (ferramenta === "cartao_de_acesso" && objeto === "painel_de_controle") {
            return this.objetos.get(objeto).usar(this.engine.mochila.pega(ferramenta));
        }
        return false;
    }
}