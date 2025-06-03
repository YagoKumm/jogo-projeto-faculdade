# Jogo: Colapso no Laboratório

## Descrição
Este é um jogo de aventura textual criado como projeto da disciplina de Programação Orientada a Objetos.  
Você é um cientista preso em um laboratório secreto, onde um dispositivo experimental foi ativado acidentalmente.  
Seu objetivo é desativá-lo antes que ele colapse.

---

## Requisitos para execução

- Ter o **Node.js** instalado na máquina
- Estar com todos os arquivos organizados na mesma estrutura da pasta

---

## Como executar o jogo

1. Abra o terminal (prompt de comando).
2. Execute o seguinte comando: node index.js


---

## Comandos disponíveis no jogo

- `pega <ferramenta>` → guarda uma ferramenta da sala na mochila.
- `usa <ferramenta> <objeto>` → usa a ferramenta sobre um objeto.
- `sai <nome_da_sala>` → vai para a sala indicada.
- `inventario` → mostra as ferramentas que estão na mochila.
- `fim` → encerra o jogo.

---

## Ferramentas disponíveis no jogo

- `chave_de_fenda` → usada para abrir armário e consertar o painel elétrico.
- `cartao_de_acesso` → usado no painel de controle para desativar o sistema.

---

## Objetos interativos

- `armario_trancado` → está trancado e guarda o cartão de acesso.
- `painel_eletrico` → precisa ser consertado para ativar o sistema.
- `computador` → contém a pista com o código (1234).
- `painel_de_controle` → local onde se insere o código final para vencer.

---

## Salas do laboratório

- `Entrada_do_Laboratorio` → sala inicial. Onde você encontra a chave de fenda.
- `Sala_de_Experimentos` → tem o armário trancado e o painel elétrico.
- `Escritorio_do_Cientista` → contém o computador com o código.
- `Sala_de_Controle` → onde você insere o cartão e digita o código.

---

## Dicas

- Os nomes devem ser digitados exatamente como aparecem acima (com underscores).
- Você pode usar `inventario` para ver quais ferramentas já pegou.
