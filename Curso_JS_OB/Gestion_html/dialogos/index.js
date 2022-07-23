const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    //confirm("Are you sure????") && console.log("OK");
    // confirm("Are you sure????") 
    //     ? console.log("OK")
    //     : console.log("NO!!!!");

    const respuesta = confirm("¿Seguro?")
    if (respuesta) {
        console.log("Estas de acuerdo");
    } else {
        console.log("No estas de acuerdo");
    }
})

/*********************************************/

const botonInfo = document.querySelector("#info")

botonInfo.addEventListener("click",() => {
    const nombre = prompt("¿Cual es tu nombre?")
    if(nombre){
        console.log("Tu nombre es " + nombre);
    } else {
        console.log("No has introducido nada");
    }
   
})

/*********************************************/

const lista = [{
    nombre: "Gorka",
    edad:34
}, {
    nombre: "Julen",
    edad:21
}, {
    nombre: "Kira",
    edad:3
}]

console.table(lista)