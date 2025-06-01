import { Objeto, Ferramenta } from "./Basicas.js";
import { ChaveDeFenda } from "./ChaveDeFenda.js";
import { CartaoDeAcesso } from "./CartaoDeAcesso.js";

export class ArmarioTrancado extends Objeto {
    constructor(engine) {
        super(
            "armario_trancado",
            "O armário está trancado.",
            "O armário foi aberto e contém um cartão de acesso!"
        );
        this.engine = engine;
        this.aberto = false;
    }

    usar(ferramenta) {
        if (ferramenta instanceof ChaveDeFenda && !this.aberto) {
            this.acaoOk = true;
            this.aberto = true;
            let cartao = new CartaoDeAcesso();
            this.engine.mochila.guarda(cartao);
            return true;
        }
        return false;
    }
}