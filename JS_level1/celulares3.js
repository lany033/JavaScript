class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir (){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerrar (){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }
    
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app instalada correctamente")
        }
    }

    appInfo(){
        return `
        Descargas : <b>${this.descargas}</b></br>
        Puntuacion : <b>${this.puntuacion}</b></br>
        Peso : <b>${this.peso}</b></br>`
    }
}

app = new App("1600","5 estrellas","900mb");
app2 = new App("100","5 estrellas","900mb");
app3 = new App("600","5 estrellas","900mb");
app4 = new App("160","5 estrellas","900mb");
app5 = new App("500","5 estrellas","900mb");
app6 = new App("400","5 estrellas","900mb");
app7 = new App("1200","5 estrellas","900mb");


// app.instalar();
// app.abrir();
// app.cerrar();

document.write(`
${app.appInfo()}
${app2.appInfo()}
${app3.appInfo()}
${app4.appInfo()}
${app5.appInfo()}
${app6.appInfo()}
${app7.appInfo()}
`
)

