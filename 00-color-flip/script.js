const div = document.getElementById("main")
const btn = document.getElementById("btn");


document.getElementById("boton-evento").addEventListener("click", function () {
    var randomColor = generarColorAleatorio()
    div.style.backgroundColor = randomColor
    console.log("click")
});

    

      function generarColorAleatorio() {
        // Generar valores aleatorios para los componentes RGB
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        
        // Crear el string del color RGB en formato hexadecimal
        var colorHex = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        
        // Devolver el color generado
        return colorHex;
      }
      