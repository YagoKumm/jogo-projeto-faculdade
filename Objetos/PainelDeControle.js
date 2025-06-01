import { Objeto } from "./Basicas.js";

export class PainelDeControle extends Objeto {
    constructor(engine) {
        super(
            "painel_de_controle",
            "Painel de controle travado. Digite o código.",
            "Sistema desativado com sucesso!"
        );
        this.engine = engine;
    }

    usar(ferramenta) {
        const codigo = prompt("Digite o código para desativar o sistema: ");
        if (codigo === "1234") {
            this.acaoOk = true;
            this.engine.indicaFimDeJogo();
            return true;
        }
        return false;
    }
}