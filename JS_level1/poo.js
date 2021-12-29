class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años , soy ${this.color},soy${this.raza}`;
    }

    //Cuando creamos metodo la forma de acceder al objeto es con this.
    verInformacion(){
        document.write(this.informacion + "<br>")
    }
}

//herencia
//No se puede tener un objeto con el mismo nombre de la clase

class perroo extends animal {
    constructor(especie,edad,color, raza){
        super(especie,edad, color);
        this.raza =null;
    }

    set modificarRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

//las clases se definen con const
const perro = new perroo("perro",5 , "blanco", "doberman"); //this = perro
const gato = new animal("gato",5,"negro");

perro.modificarRaza = "pedro";
document.write(perro.getRaza)
