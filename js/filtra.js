var campoFiltros = document.querySelectorAll(".filtrar-tabela");

campoFiltros.forEach(function(campoFiltro) {
  campoFiltro.addEventListener("input", function() {

    var name = campoFiltro.getAttribute("name");
    if(name == "filtro-nome") {
      filtraPorUmCampo(this.value, ".info-nome");

    }else if(name == "filtro-sexo") {
      filtraPorUmCampo(this.value, ".info-sexo");

    }else if(name == "filtro-idade") {
      filtraPorUmCampo(this.value, ".info-idade");
    }

  });
});

function filtraPorUmCampo(value, classe) {
  console.log(value);
  var convidados = document.querySelectorAll(".convidado");
  if (value.length > 0) {
    for (var i = 0; i < convidados.length; i++) {
      var convidado = convidados[i];
      var tdNome = convidado.querySelector(classe);
      var nome = tdNome.textContent;
      var expressao = new RegExp(value, "i");

      if (!expressao.test(nome)) {
        convidado.classList.add("invisivel");
      } else {
        convidado.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < convidados.length; i++) {
      var convidado = convidados[i];
      convidado.classList.remove("invisivel");
    }
  }
}
