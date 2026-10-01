let resultado = document.getElementById("resultado");

let senha;
let subtotal = 0;
let quantidade = 0;

do {
    senha = prompt("Digite a senha:");

    if (senha !== "1234") {
        alert("Senha incorreta!");
    }

} while (senha !== "1234");

alert("Acesso permitido!");

while (true) {

    let opcao = Number(prompt(
        "1 - Hambúrguer - R$ 15,00\n" +
        "2 - Pizza - R$ 20,00\n" +
        "3 - Refrigerante - R$ 6,00\n" +
        "4 - Batata Frita - R$ 10,00\n" +
        "0 - Finalizar\n\n" +
        "Escolha:"
    ));

    if (opcao === 0) {
        break;
    }

    let preco;
    let produto;

    switch (opcao) {

        case 1:
            preco = 15;
            produto = "Hambúrguer";
            break;

        case 2:
            preco = 20;
            produto = "Pizza";
            break;

        case 3:
            preco = 6;
            produto = "Refrigerante";
            break;

        case 4:
            preco = 10;
            produto = "Batata Frita";
            break;

        default:
            alert("Opção inválida!");
            continue;
    }

    subtotal += preco;
    quantidade++;

    alert(produto + " adicionado!");
}

let desconto = subtotal >= 50 ? subtotal * 0.10 : 0;
let total = subtotal - desconto;

resultado.innerHTML = "<h2>Pedido Finalizado</h2>";

for (let i = 1; i <= quantidade; i++) {
    resultado.innerHTML += "<p>Produto " + i + " registrado</p>";
}

resultado.innerHTML +=
    "<p>Subtotal: R$ " + subtotal.toFixed(2) + "</p>" +
    "<p>Desconto: R$ " + desconto.toFixed(2) + "</p>" +
    "<p>Total: R$ " + total.toFixed(2) + "</p>";
