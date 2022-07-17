const datos = {
    nombre: "Melanie",
    apellido: "Mantilla",
    edad: 29,
    altura: 1.59,
    eresDesarrollador: true
}

const miEdad = datos.edad
console.log(miEdad);

const listaDatos = [
    { nombre: "Melanie", apellido: "Mantilla", edad: 29 }, 
    { nombre: "Karen", apellido: "Tenepuclla", edad: 27 },
    { nombre: "Evelyn", apellido: "Quispe", edad: 28 }
]

listaDatos.sort((a,b) => a.edad - b.edad)

console.log(listaDatos);