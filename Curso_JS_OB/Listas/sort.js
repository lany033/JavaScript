//.sort()

const array = [2,5,8,3,6,8,9]

console.log(array);

array.sort((a,b)=>{
    if (a < b) {
        return -1
    } else if (a > b){
        return +1
    } else { 0
        return 
    }
})

console.log(array);

//////////////////
const listaObjetos = [
    { nombre: "Leire", edad:15},
    { nombre: "Gorka", edad:25},
    { nombre: "Miguel", edad:35},
    { nombre: "Lucia", edad:34},
    { nombre: "Amaia", edad:38},
]


// listaObjetos.sort((a,b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if(a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })

listaObjetos.sort((a,b) => a.edad - b.edad)