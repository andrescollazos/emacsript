// VALORES POR DEFECTO

// Tradicional
function newFunction(name, edge, country) {
    var name = name || 'Felipe'
    var age = age || 25
    var country = country || 'Colombia'
    console.log(name, age, country)
}

// ES6
function newFunction2(name = 'Felipe', age = 25, country = 'CO') {
    console.log(name, age, country)
}

newFunction2()
newFunction2('Ricardo', 20, 'CO')

// --------------------------------------------------------------------------------
// CONCATENACIÓN DE PALABRAS

// Templates literals para concatenar strings
let hello = 'Hello'
let world = 'World'
let epicPhrase0 = hello + ' ' + world
console.log(epicPhrase0)

// ES6
let hello = 'Hello'
let world = 'World'
let epicPhrase = `${hello} ${world}` // Template literal, necesario usar ``
console.log(epicPhrase)


// --------------------------------------------------------------------------------
// MULTILINEA

// Forma tradicional
let lorem = 'Adipisicing esse labore elit officia Lorem sint voluptate. \n'
+  'Ut ipsum officia anim qui excepteur Lorem tempor dolor anim velit nostrud.'

// ES6

let lorem2 = `Adipisicing esse labore elit officia Lorem sint voluptate.
Ut ipsum officia anim qui excepteur Lorem tempor dolor anim velit nostrud.`

console.log(lorem)
console.log(lorem2)


// --------------------------------------------------------------------------------
// DESESTRUCTURAR

// Tradicional
let person = {
    'name': 'Felipe',
    'age': '25',
    'country': 'CO'
}
console.log(person.name, person.age, person.country)

// ES6
let {name, age, country} = person
console.log(name, age, country)


// --------------------------------------------------------------------------------
// Spread Operator
// Unir elementos de forma más amigable

let team1 = ['Felipe', 'Andres', 'Juan']
let team2 = ['Manuela', 'Olga', 'Alfredo']
let education = ['Roberto', ...team1, ...team2]

console.log(education)


