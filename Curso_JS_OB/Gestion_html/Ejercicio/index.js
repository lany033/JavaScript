const boton = document.querySelector("#btn")

boton.addEventListener("click",() => 
    alert("click en el boton")
)

$("#btn-2").click(()=>{
    console.log("Hola, estoy utilizando jQuery");
})