const fecha = new Date()
console.log(fecha);

const fechaCump = new Date(1993,2,20)
console.log(fechaCump);

const compararFechas = fecha.getTime() > fechaCump.getTime()
console.log(compararFechas);

const diaNacimiento = fechaCump.getDate()
console.log(diaNacimiento);

const mesNacimiento = fechaCump.getMonth() + 1
console.log(mesNacimiento);

const anyoNacimiento = fechaCump.getFullYear()
console.log(anyoNacimiento);