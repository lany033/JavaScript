const miFuncion = num => {
    if(typeof num == "number"){
        return 2 * num
    } 
    throw new Error("El valor debe ser tipo numero")
}



try{
    const numero = miFuncion("F")
    console.log("Operacion se ejecuto de forma correcta");
    console.log(numero);
} catch (e) {
    console.error("ERROR!")
}