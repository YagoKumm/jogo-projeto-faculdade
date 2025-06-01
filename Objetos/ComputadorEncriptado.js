import { Objeto } from "./Basicas.js";

export class ComputadorEncriptado extends Objeto {
    constructor() {
        super(
            "computador",
            "O computador está bloqueado. Há um arquivo com senha.",
            "Você leu a mensagem: 'O código é 1234'."
        );
    }

    usar(ferramenta) {
        this.acaoOk = true;
        return true;
    }
}