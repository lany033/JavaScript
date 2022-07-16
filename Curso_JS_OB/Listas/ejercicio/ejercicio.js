var listCompra = ["arroz","pan","atun","aceite","pescado"]

var newListCompra = listCompra.concat("Aceite de Girasol")

console.log(newListCompra);

console.log(newListCompra.pop());
console.log(newListCompra);


const listaPeliculas = [
    {pelicula: "Piratas del Caribe", director:"Gore Verbinski", fecha:2003},
    {pelicula: "Toy Story", director:"John Lasseter", fecha:1995},
    {pelicula: "Orgullo y Prejuicio", director:"Joe Wright", fecha:2010},
]

const filtropeli = listaPeliculas.filter( peli => peli.fecha >= 2010)
console.log(filtropeli);

const filtroDirectores = listaPeliculas.map((obj) => obj.director )
console.log(filtroDirectores);

const filtroTitulos = listaPeliculas.map((obj) => obj.pelicula)
console.log(filtroTitulos);

const peliculasDirectores = filtroDirectores.concat(filtroTitulos)
console.log(peliculasDirectores);

const peliculasDirectores2 = [...filtroDirectores,...filtroTitulos]
console.log(peliculasDirectores2);

