const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")



parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo " + parrafo.innerText);
        parrafo.classList.add("dragging") 
        event.dataTransfer.setData("id", parrafo.id)  
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0,0)
    })
    parrafo.addEventListener("dragend", () => {
        console.log("Termine de arrastrar el parrafo " + parrafo.innerText);
        parrafo.classList.remove("dragging")   
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
        console.log("Drag over");
    })

    seccion.addEventListener("drop", event => {
        console.log("drop");
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Parrafo id:", id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })

})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect= "move"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    
    document.getElementById(id_parrafo).remove()
})