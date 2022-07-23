const f = document.getElementById("formulario")

console.log(f);

f.addEventListener("submit", evento => {
    console.log(evento); //primero pase por pantalla la informacion del evento
    evento.preventDefault() //evite que se ejecute el comportamiento por defecto
})



