var nombre = "Melanie"
var apellido = "Mantilla"

var nombreCompleto = {
    nombre,
    apellido
}

sessionStorage.setItem("persona", JSON.stringify(
    nombreCompleto))

localStorage.setItem("persona", JSON.stringify(
    nombreCompleto))

const now = new Date()
document.cookie = "nombreCookie=myCookie; expires=" + new Date(now.getTime() + 2*60000)




