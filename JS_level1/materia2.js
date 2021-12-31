let materias = {
        fisica:       ["Perez","pedro","juan","pepito","cofla","maria"],
        programacion: ["Rdriguez","pedro","juan","pepito"],
        logica:       ["jimenez","pedro","juan","pepito","cofla"],
        quimica:      ["gonzalez","pedro","juan","pepito","maria"]
    }
    
const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas <br>`)
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {   
            fisica: personas,
            programacion: materias ['programacion'],
            logica:       materias ['logica'],
            quimica:      materias ['quimica']
            }
         }
        else if (materia == "programacion") {
            materias = {   
            fisica: materias["fisica"],
            programacion: personas,
            logica:       materias ['logica'],
            quimica:      materias ['quimica']
            }
         }
         if (materia == "logica") {
            materias = {   
            fisica: materias['fisica'],
            programacion: materias ['programacion'],
            logica:       personas,
            quimica:      materias ['quimica']
            }
         }
         if (materia == "quimica") {
            materias = {   
            fisica: materias['fisica'],
            programacion: materias ['programacion'],
            logica:       materias ['logica'],
            quimica:      personas
            }
         }
         document.write(`¡Felicidades ${alumno}! te has inscrito en ${materia} correctamente <br>`)
    }
}

document.write(materias['fisica'] + "<br>")

inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")
inscribir ("pedrito", "fisica")



document.write("<br>" + materias['fisica'])
























