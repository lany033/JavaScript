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


class CelularAltaGama extends celulares{
    constructor(color, peso, rdp, rdc,ram,rdce){
        super(color, peso, rdp, rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion camara extra: ${this.resolucionDeCamaraExtra}`
    }
}

celulares1 = new CelularAltaGama("rojo","130g","5,2","4K","3GB","full HD");
celulares2 = new CelularAltaGama("rojo","130g","5,2","4K","3GB","full HD");




document.write(
    `${celulares1.infoAltaGama()} <br>
    ${celulares2.infoAltaGama()} <br>
    `
);

