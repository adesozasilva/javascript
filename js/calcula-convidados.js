var convidados = document.querySelector("#tabela-convidados");
var trs = convidados.querySelectorAll(".convidado");

trs.forEach(function(tr, index) {
  tr.appendChild(montaIndice(++index));
})

document.querySelector("#info-masculino").textContent =  countPorUmCampo("Masculino", ".info-sexo");
document.querySelector("#info-feminino").textContent =  countPorUmCampo("Feminino", ".info-sexo");
document.querySelector("#info-adulto").textContent =  countPorUmCampo("Adulto", ".info-idade");
document.querySelector("#info-crianca").textContent =  countPorUmCampo("Criança", ".info-idade");

function montaIndice(dado) {
  var td = document.createElement("td");
  td.textContent = dado;

  return td;
}

function countPorUmCampo(value, classe) {
  console.log(value);
  var count = 0;
  var convidados = document.querySelectorAll(".convidado");
  if (value.length > 0) {
    for (var i = 0; i < convidados.length; i++) {
      var convidado = convidados[i];
      var tdNome = convidado.querySelector(classe);
      var nome = tdNome.textContent;
      var expressao = new RegExp(value, "i");

      if (expressao.test(nome)) {
        count = count + 1;
      }

    }
  }
  return count;
}
