document.addEventListener("DOMContentLoaded", function () {
  function Encriptado(text) {
    const encryptedText = [];

    for (let i = 0; i < text.length; i++) {
      var char = text[i].toLowerCase();
      if (char === "a") {
        const newchar = "ai";
        encryptedText.push(newchar);
      } else if (char === "e") {
        var newchar = "enter";
        encryptedText.push(newchar);
      } else if (char === "i") {
        var newchar = "imes";
        encryptedText.push(newchar);
      } else if (char === "o") {
        var newchar = "ober";
        encryptedText.push(newchar);
      } else if (char === "u") {
        var newchar = "ufat";
        encryptedText.push(newchar);
      } else {
        encryptedText.push(char);
      }
    }
    return encryptedText.join("");
  }

  function Desencriptado(encryptedText) {
    const decryptedText = [];

    for (let i = 0; i < encryptedText.length; i++) {
      var char = encryptedText[i].toLowerCase();

      if (char === "a" && encryptedText[i + 1] === "i") {
        decryptedText.push("a");
        i++; // Saltar al siguiente carácter después de "i"
      } else if (
        char === "e" &&
        encryptedText[i + 1] === "n" &&
        encryptedText[i + 2] === "t" &&
        encryptedText[i + 3] === "e" &&
        encryptedText[i + 4] === "r"
      ) {
        decryptedText.push("e");
        i += 4
      } else if (
        char === "i" &&
        encryptedText[i + 1] === "m" &&
        encryptedText[i + 2] === "e" &&
        encryptedText[i + 3] === "s"
      ) {
        decryptedText.push("i");
        i += 3; // Saltar a los tres siguientes caracteres después de "s"
      } else if (
        char === "o" &&
        encryptedText[i + 1] === "b" &&
        encryptedText[i + 2] === "e" &&
        encryptedText[i + 3] === "r"
      ) {
        decryptedText.push("o");
        i += 3; // Saltar a los tres siguientes caracteres después de "r"
      } else if (
        char === "u" &&
        encryptedText[i + 1] === "f" &&
        encryptedText[i + 2] === "a" &&
        encryptedText[i + 3] === "t"
      ) {
        decryptedText.push("u");
        i += 3; // Saltar a los tres siguientes caracteres después de "t"
      } else {
        decryptedText.push(char);
      }
    }

    return decryptedText.join("");
  }

  function Preparar() {
    const elemento = document.getElementById("mensaje1");
    elemento.remove();
    const elemento2 = document.getElementById("mensaje2");
    elemento2.remove();
    const imagen = document.getElementById("imgHu");
    imagen.style.width = "30%";
    imagen.style.marginTop = "3%";

    const container = document.getElementById("square2");
    const htmlFragment = `
      <p id="texto2"></p>
      <div id="copiar" class="boton">
        <div id="btnCopy" class="botonC">
          <p>Copiar</p>
          <div class="circle"><img src="Imagenes/copy-svgrepo-com.svg" alt=""></div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", htmlFragment);
    copiarrender();
  }

  function imprimir(texto) {
    const espacio = document.getElementById("texto2");
    espacio.textContent = texto;
  }

  function botones() {
    var contador = 0;

    // Botón Encriptar
    const btnEncriptar = document.getElementById("btnE");
    btnEncriptar.addEventListener("click", function () {
      var texto = document.getElementById("txt").value;
      texto = Encriptado(texto);
      if (contador == 0) {
        Preparar();
        imprimir(texto);
        contador++;
      } else {
        imprimir(texto);
      }
    });

    // Botón Desencriptar
    const btnDesencriptar = document.getElementById("desincriptar");
    btnDesencriptar.addEventListener("click", function () {
      var texto = document.getElementById("txt").value;
      texto = Desencriptado(texto);
      if (contador == 0) {
        Preparar();
        imprimir(texto);
        contador++;
      } else {
        imprimir(texto);
      }
    });





    
  }


  function copiarrender(){
    const btnCopiar = document.getElementById("btnCopy");
    const textoACopiar = document.getElementById("texto2");
    
    console.log(btnCopiar); // Verificar si el elemento es encontrado
    
    btnCopiar.addEventListener("click", function() {
      const contenido = textoACopiar.innerText;
    
      navigator.clipboard.writeText(contenido)
        .then(function() {
          // Éxito al copiar
          alert("Texto copiado al portapapeles");
        })
        .catch(function(error) {
          // Error al copiar
          console.error("Error al copiar al portapapeles:", error);
        });
    });
  }





  botones();

 
});
