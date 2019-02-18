var botaoAdicionar = document.querySelector("#adicionar-convidado");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var convidado = obtemConvidadoDoFormulario(form);

    var erros = validaConvidado(convidado);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaConvidadoNaTabela(convidado);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemConvidadoDoFormulario(form) {

    var convidado = {
        nome: form.nome.value,
        sexo: form.sexo.value,
        idade: form.idade.value
    }

    return convidado;
}

function montaTr(convidado) {
    var convidadoTr = document.createElement("tr");
    convidadoTr.classList.add("convidado");

    convidadoTr.appendChild(montaTd(convidado.nome, "info-nome"));
    convidadoTr.appendChild(montaTd(convidado.sexo, "info-sexo"));
    convidadoTr.appendChild(montaTd(convidado.idade, "info-idade"));

    return convidadoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaConvidado(convidado) {

    var erros = [];

    if (convidado.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (convidado.sexo.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (convidado.idade.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaConvidadoNaTabela(convidado) {
    var convidadoTr = montaTr(convidado);
    var tabela = document.querySelector("#tabela-convidados");
    tabela.appendChild(convidadoTr);
}
