// --------------------------------------------------------------------------------
// APLANAR ARREGLOS CON FLAT

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(1)) // flat(n), donde n -> es la profundidad del arreglo al cual se desea aplanar

// --------------------------------------------------------------------------------
// MAPEAR CADA ELEMENTO, PASARLE UNA FUNCIÓN Y APLANAR SEGUN RESULTADO CON MAP

let array = [1,2,3,4,5]
console.log(array.flatMap(value => value*2))

// --------------------------------------------------------------------------------
// TRIM START PARA ELIMINAR ESPACIOS EN BLANCO AL INICIO

let hello = '       hello world'
console.log(hello)
console.log(hello.trimStart())

// --------------------------------------------------------------------------------
// TRIM END PARA ELIMINAR ESPACIOS EN BLANCO AL FINAL

let hello2 = 'hello world      '
console.log(hello2)
console.log(hello2.trimEnd())

// --------------------------------------------------------------------------------
// ENTRIES TO OBJECTS 

let entries = [['name', 'andres'], ['age', 25], ['country', 'CO']]
console.log(Object.fromEntries(entries))

// --------------------------------------------------------------------------------
// OBJETO DE TIPO SYMBOL
// Nos permite acceder a una descripción

let mySimbol = `My Simbol`
let symbol = Symbol(mySimbol)
console.log(symbol.description)


