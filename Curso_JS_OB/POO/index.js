class Estudiante {
    constructor(nombre,asignatura){
        this.nombre = nombre
        this.asignatura = ["Javascript", "HTML", "CSS"]
    }
     

    obtenDatos(){
        console.log(`Hola mi nombre es ${this.nombre} y estudio ${this.asignatura}`);
    }
}

let estudiante_2 = new Estudiante("Mario","css")
console.log(estudiante_2);

estudiante_2.obtenDatos()