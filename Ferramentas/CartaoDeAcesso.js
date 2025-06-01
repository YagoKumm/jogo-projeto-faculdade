import { Ferramenta } from "./Basicas.js";

export class CartaoDeAcesso extends Ferramenta {
    constructor() {
        super("cartao_de_acesso");
    }

    usar() {
        return true;
    }
}