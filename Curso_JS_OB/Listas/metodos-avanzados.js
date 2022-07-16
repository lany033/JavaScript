//Metodos mas avanzados
//.map() .filter() .reduce()

const ciudades = ["lima","bogota","quito","santiago","buenos aires","rio"]

const newCiudades = ciudades.map((valor, indice) =>  `${indice+1} - ${valor}`)
console.log(newCiudades);

//.filter()
const listaObjetos = [
    { nombre: "Leire", edad:33},
    { nombre: "Gorka", edad:35},
    { nombre: "Miguel", edad:15},
    { nombre: "Lucia", edad:13},
    { nombre: "Amaia", edad:27},
]


const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")

//.reduce()
const valores = [1,4,2,5,7,4,8,9]

const suma = valores.reduce((anterior, currentValue, index, arrayOrig) => {
    console.log(anterior);
    console.log(currentValue);
    console.log(index);
    console.log(arrayOrig);
    return anterior + currentValue

})

console.log(suma);