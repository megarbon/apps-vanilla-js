function actualizarDias() {
  var fechaFumar = new Date(document.getElementById("fecha-fumar").value);
  var fechaHoy = new Date();
  var diferenciaDias = Math.floor(
    (fechaHoy - fechaFumar) / (1000 * 60 * 60 * 24)
  );
  document.getElementById("dias-sin-fumar").innerHTML = diferenciaDias;
}

function getMotivationQuote() {
  const quotes = [
    "Elige la vida, elige dejar de fumar.",
    "Dejar de fumar no es fácil, pero es posible. Tú puedes hacerlo.",
    "El camino hacia una vida libre de humo puede ser difícil, pero vale la pena.",
    "Cada día sin fumar es un paso hacia una vida más saludable y feliz.",
    "No importa cuántas veces hayas intentado dejar de fumar, siempre hay una oportunidad más.",,
    "Tu cuerpo te lo agradecerá si dejas de fumar hoy mismo.",
    "No dejes que el cigarrillo controle tu vida. Tú eres más fuerte que eso.",
    "Dejar de fumar es difícil, pero no imposible. ¡Tú puedes hacerlo!",
    "Las reglas son para aquellos que no tienen la capacidad de improvisar.",
    "No le tengas miedo a la oscuridad, haz que la oscuridad le tenga miedo a ti.",
    "Si quieres algo, sal a buscarlo y arrebátalo de las manos de quien lo tenga.",
    "La vida es como un juego de cartas, hay que aprender a jugar con lo que te toca.",
    "No hay nada más peligroso que un hombre con nada que perder.",
    "El poder no se concede, se toma.",
    "No hay nadie más peligroso que alguien que sabe lo que quiere y hará cualquier cosa para conseguirlo.",
    "El éxito es una ciencia, si tienes las condiciones correctas, obtendrás el resultado correcto.",
    "No importa si pierdes una batalla, siempre y cuando ganes la guerra.",
    "La lealtad es todo en este mundo.",
    "Nunca hagas negocios con alguien que no respetas.",
    "El dinero no lo es todo, pero es un buen comienzo.",
    "No importa qué tan alto llegues, siempre debes recordar de dónde vienes.",
    "Elige tu camino con sabiduría, porque cada elección tiene sus consecuencias.",
    "La vida es una lotería, pero no siempre tienes que esperar a que te toque el premio mayor.",
    "La única forma de ser libre es ser dueño de tu propia vida.",
    "Si vas a hacer algo malo, hazlo bien.",
    "Nunca subestimes el poder de la intimidación.",
    "La violencia no es la respuesta, a menos que sea la única respuesta.",
    "No existe el honor entre ladrones, pero siempre hay una forma de hacer negocios.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("motivation-text").innerText = randomQuote;
}

document
  .getElementById("motivation-button")
  .addEventListener("click", function () {
    getMotivationQuote();
  });

window.onload = function () {
  actualizarDias();
  getMotivationQuote();
  document
    .getElementById("update-button")
    .addEventListener("click", function () {
      getMotivationQuote();
    });
};
