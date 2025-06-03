import { Objeto } from "../Basicas.js";
import { ChaveDeFenda } from "../ferramentas/ChaveDeFenda.js";

export class PainelEletrico extends Objeto {
    constructor() {
        super(
            "painel_eletrico",
            "O painel está danificado e sem energia.",
            "O painel foi consertado com sucesso."
        );
    }

    usar(ferramenta) {
        if (ferramenta instanceof ChaveDeFenda) {
            this.acaoOk = true;
            return true;
        }
        return false;
    }
}