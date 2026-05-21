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

    if(! nome || isNaN(idade) || isNaN(valor)) 
        alert("escreva seus dados!");
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

    // forEach: percorre um array e aplica uma ação para cada elemento
    estoque.forEach(item => {
        let li = document.createElement("li");
        li.innerText`item ${item} reservado.`;
        lista.appendChild(li); //usad para adicionar um novo elemento  ou texto
        });
        relatorio.style.display = "block";
        relatorio.innerHTML = `
        <strong> RESUMO DO PEDIDO <\strong><br>
        cliente: ${nome} <br>
        total original: R$ ${valor.tofixed(2)} <br>;
        <strong> total com desconto: R$ ${valorfinal.tofixed(2)} <\strong>
        `;
    }else{
        msg.innerText = "venda bloqueada: menor de 16 anos";
        msg.style.color = "#ff4444";
        relatorio.style.display = "none";
        lista.innerHTML = " ";
    }  

