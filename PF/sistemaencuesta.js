// Función para crear encuestas y conjunto de respuestas
function crearEncuesta(pregunta, respuestas) {
    const resultados = {};
    // Objeto para almacenar los resultados, inicia con valor "0" en cada respuesta (aun no recibe votos en esta instancia)
    respuestas.forEach(respuesta => {
      resultados[respuesta] = 0;
    });
    //Devolución de objeto que contiene pregunta, respuestas, resultados y ademas la función de votar que registra voto en la encuesta
    return {
        pregunta,
        respuestas,
        resultados,
        votar(respuesta) {
            while (!respuestas.includes(respuesta)) {
                console.log("¡Error en el ingreso de respuesta!");
                respuesta = prompt(`La respuesta "${respuesta}" no es válida. Por favor, ingrese una respuesta válida (${respuestas.join(", ")}):`);
            }
            resultados[respuesta]++;
            mostrarResultados(resultados);
        }
    };
}

// Función para ingresar varias encuestas
function ingresarEncuestas() {
    const numPreguntas = 8;
    for (let i = 0; i < numPreguntas; i++) {       
        const pregunta = prompt(`Ingrese la pregunta ${i + 1} de la encuesta:`);
        const respuestas = [];
        // Solicita al usuario ingresar hasta 3 opciones de respuesta
        for (let j = 0; j < 3; j++) {
            const respuesta = prompt(`Ingrese respuesta ${j + 1} para la pregunta "${pregunta}":`);
            respuestas.push(respuesta);
        }
        // Se crea una encuesta y se enlaza con la función de "crearEncuesta" y se agrega al arreglo de encuestas
        const nuevaEncuesta = crearEncuesta(pregunta, respuestas);
        // Se agrega una verificación de si encuesta es válida
            encuestas.push(nuevaEncuesta);
            console.log(`Votando en la encuesta: ${pregunta}`);
            votarEncuesta(nuevaEncuesta);
    }
    return encuestas;
}

// Función para votar en una encuesta
function votarEncuesta(encuesta) {
    // Este mensaje incluye las respuestas disponibles
    let mensaje = "Ingrese su respuesta (";
    encuesta.respuestas.forEach((respuesta, index) => {
        mensaje += respuesta;
        if (index < encuesta.respuestas.length - 1) {
            mensaje += ", ";
        }
    });
    mensaje += "):";
    const respuesta = prompt(mensaje);
    // Se enlaza con la funcion de voto para registrarlo
    encuesta.votar(respuesta);
}

  // Función para mostrar los resultados de la encuesta
  function mostrarResultados(resultados) {
    console.log("Resultados de la encuesta:");
    // Se agrega una iteración de cada respuesta en resultados y muestra el voto recibido
    for (let respuesta in resultados) {
      console.log(`${respuesta}: ${resultados[respuesta]} votos`);
    }
  }

  // Se crea una constante de encuestas para almacenar
  const encuestas = [];
// Se inicializa con la siguiente función para ingresar encuesta con preguntas, respuestas y voto por respuesta
ingresarEncuestas();
