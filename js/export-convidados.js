var buttonExport = document.querySelector("#export-csv");

buttonExport.addEventListener("click", function() {
  var convidados = document.querySelector("#tabela-convidados");  
  var trs = convidados.querySelectorAll(".convidado");
  var convidados = []
  trs.forEach(function(tr) {
    convidado = obtemConvidado(
      tr.querySelector('.info-nome').textContent,
      tr.querySelector('.info-idade').textContent,
      tr.querySelector('.info-sexo').textContent)
    convidados.push(convidado)
  });

  // Convert Object to JSON
  var jsonObject = JSON.stringify(convidados);

  // Display JSON
  document.querySelector('#json').textContent = jsonObject;
  document.querySelector('#csv').textContent = ConvertToCSV(jsonObject);

});

// JSON to CSV Converter
function ConvertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
      if (line != '') line += ','

      line += array[i][index];
    }

    str += line + '\r\n';
  }

  return str;
}

function obtemConvidado(nome, sexo, idade) {

  var convidado = {
    nome: nome,
    sexo: sexo,
    idade: idade
  }

  return convidado;
}
