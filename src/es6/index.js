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

// tradicional
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

// --------------------------------------------------------------------------------
// PROPIEDAD DE OBJETOS: ASIGNACIÓN

let name = 'Andres'
let edad = 25

// ES5
obj = {name: name, edad: edad}

// ES6
obj2 = {name, edad}

// --------------------------------------------------------------------------------
// ARROW FUNCTIONS

const names = [
    {name: 'Felipe', edad: 25},
    {name: 'Andres', edad: 26}
]

let listOfNames = names.map(function (item) {
    console.log(item.name)
})

let listOfNames2 = names.map( item => console.log(item.name))

const listOfNames3 = (name, ages, country) => {
    console.log(name)
}
listOfNames3('Felipe', 23, 'CO')

const square = num => num * num
console.log(square(2))

// --------------------------------------------------------------------------------
// CLASES

class Calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sumar (valueA, valueB) {
        return valueA + valueB
    }
    
    restar (valueA, valueB) {
        return valueA - valueB
    }

    multiplicar (valueA, valueB) {
        return valueA * valueB
    }

    dividir (valueA, valueB) {
        return valueA / valueB
    }
}

const calc = new Calculator()
console.log(calc.sumar(3, 4))
console.log(calc.restar(3, 4))
console.log(calc.multiplicar(3, 4))
console.log(calc.dividir(12, 4))


// --------------------------------------------------------------------------------
// MODULOS

import { hello } from './module'
console.log(hello())

// --------------------------------------------------------------------------------
// GENERADORES

function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }

    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)