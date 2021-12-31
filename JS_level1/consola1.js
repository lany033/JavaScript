const materias = {
    fisica: [90,6,3,"fisica"],
    matematica: [56,7,3,"matematica"],
    logica: [95,3,4,"logica"],
    quimica: [65,4,4,"quimica"],
    calculo: [95,7,2,"calculo"],
    programacion: [75,3,3,"programacion"],
    biologia: [60,7,3,"biologia"],
    bbdd: [85,4,3,"bbdd"],
    algebra: [90,8,4,"algebra"],
    
}

const aprobo = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);

        if (asistencias >= 90){
            
            
            console.log("%cAprobado","color : green");
        }else {
            
            console.log("%c Desaprobado","color:red");
        }

        if (promedio >= 7){
            
            console.log("%cAprobado","color : green");
        }else {
            
            console.log("%c Desaprobado","color:red");
        }

        if (trabajos >= 3){
           
            console.log("%cAprobado","color : green");
        }else {
            
            console.log("%c Desaprobado","color:red");
        }
    } 
}

aprobo()