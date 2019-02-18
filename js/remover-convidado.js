var convidados = document.querySelectorAll(".convidado");

var tabela = document.querySelector("#tabela-convidados");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
