const obtenerInformacion = (materia)=>{
    const materias = {
        fisica:       ["Perez","pedro","juan","pepito","cofla","maria"],
        programacion: ["Rdriguez","pedro","juan","pepito"],
        logica:       ["jimenez","pedro","juan","pepito","cofla"],
        quimica:      ["gonzalez","pedro","juan","pepito","maria"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia, materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de  <b> ${informacion[1]} </b>: <b styles='color:red'> ${profesor}<br></br> Los alumnos son: <b style='color: blue'>${alumnos}</b><br><br>`);
    }

}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push[" " + info];
        }
    }
    return `<b style='color blue'>${alumno}</b> esta en <b>${cantidadTotal} clases</b><br>
    Esta cursando las clases: <b>${clasesPresentes}</b>`
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"))
