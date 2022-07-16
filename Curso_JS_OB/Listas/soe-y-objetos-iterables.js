//.some()

const array = [3,6,1,6,7,24,6,84,63,2,3]

array.some(valor => valor < 0)

const existe = array.some( valor => valor === 9)

const listaObjetos = [
    { nombre: "Leire", edad:15},
    { nombre: "Gorka", edad:25},
    { nombre: "Miguel", edad:35},
    { nombre: "Lucia", edad:34},
    { nombre: "Amaia", edad:38},
]

const existeMiguel = listaObjetos.some( persona => persona.nombre === "Miguel")

//como obtener una lista a partir de un objeto iterable

const str = "Hola soy Gorka"

const ar_str = Array.from(str)

const set = new Set([2, 4,2,"hola"])

const ar_set = Array.from(set)

const keys = array.keys()


const arr_keys = Array.from(keys)
console.log(arr_keys);


