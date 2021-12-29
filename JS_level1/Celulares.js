class celulares {
    constructor(color, peso, rdp, rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    precionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else{
            alert("celular apagado")
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else{
            alert("el celular esta apagado")
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.rdc}`)
    }
    mostrarInfo(){
        return
        `Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolucion de camara: <b>${this.rdc}</b></br>
        Resolucion de pantalla: <b>${this.rdp}</b></br>
        RAM: <b>${this.ram}</b></br>`
    }

}

celular1 = new celulares("rojo", "150g", "5'","full HD", "2GB");
celular2 = new celulares("rojo", "150g", "5'","full HD", "2GB");
celular3 = new celulares("rojo", "150g", "5'","full HD", "2GB");

// celular1.precionarBotonEncendido()
// celular1.tomarFotos()
// celular1.grabarVideo()
// celular1.reiniciar()

document.write(
    `${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>`
);

