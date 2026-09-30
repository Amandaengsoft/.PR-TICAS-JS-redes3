const formDados = document.getElementById("formDados");

function raio(evento) {
 evento.preventDefault();

  let raio = Number(document.getElementById("raio").value);

  let valorPerimetro = raio * 2 * Math.PI;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "o resultado da conversão é: " + valorPerimetro.toFixed(2);

}

formDados.addEventListener("submit", raio);