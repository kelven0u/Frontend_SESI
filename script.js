function executarSistema(){
    //dados de entrada
    const nome = document.getElementById(id = "inputnome").value;
    const idade = parseInt(document.getElementById("inputidade")).value;
    const valor = parseFloat(document.getElementById("intputvalor")).value;
    const cupom = document.getElementById("inputcupom").value == "true";

    //dados de saida
    const msg = document.getElementById("mensagem-autorizada");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    // validação para campos vazios
    if(!nome || isNaN(idade) || isNaN(valor)) {
        alert("escreve nessas bosta ai, seu animal!");
        return;
    }



// regra de negocio
if (idade >= 16) {
    msg.innerText = `venda autorizada: ${none}`;
    msg.style.color = " #670b0b";

    // desconto
    let valorfinal = (valor > 500 || cupom) ? valor * 0.85: valor;

    // estoque
    let  estoque = ["placa de video", "processador", "memoria ram"];
    lista.innerHTML - ""; //limpa a lista anterior
       
}

}