import { Ferramenta } from "./Basicas.js";

export class ChaveDeFenda extends Ferramenta {
    constructor() {
        super("chave_de_fenda");
    }

    usar() {
        return true;
    }
}