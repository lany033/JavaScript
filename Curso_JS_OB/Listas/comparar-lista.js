//comparar lista
//.every()

const array = [2,7,1,5,7,3,7,4,9,0,12,-2,-8,-35]


// array.every(valor => {
//     if(typeof valor === "number") {
//         return true
//     } else {
//         return false
//     }
// })


const resultado = array.every(valor => valor > 0)

//comparacion listas

const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]

const compararArrays = (array_1,array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor,i) => valor === array_2[i])
    return res
}




