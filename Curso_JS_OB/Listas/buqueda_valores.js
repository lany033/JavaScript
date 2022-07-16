//obtener una lista  apartir de otra lista .slice()

const array = ["hola",1,2,3,true,null,"adios"]

const array2 = array.slice(2,5)

const array3 = array.slice(2, -2)


//metodos de iteracion


const array4 = ["hola",1,2,3,true,null,"adios",undefined]
//Forma ES6 MAS EFICIENTE

let suma = 0
array4.forEach(valor => {
    suma += valor
    console.log(valor);
})
console.log(suma);

//busqueda de un valor dentro de una lista

const variable = array.find(valor => {
    if(valor == 90){
        return true
    }
})

const listaObjetos = [
    { nombre: "Leire", edad:35},
    { nombre: "Gorka", edad:35},
    { nombre: "Miguel", edad:35},
    { nombre: "Lucia", edad:35},
    { nombre: "Amaia", edad:35},
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Miguel"){
//         return true
//     }
// })

const objeto = listaObjetos.find(o => o.nombre === "Miguel")


const {edad} = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad);



