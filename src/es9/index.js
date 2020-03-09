// --------------------------------------------------------------------------------
// OPERADOR DE REPOSO
// Permite extraer las propiedades de un objeto que aun no se ha construido

const obj = {
    name: 'Felipe',
    age: 25,
    country: 'CO'
}

let { name, ...all } = obj // ...all operador que permite encapsular la demas información
console.log(name, all) 

// Unir objetos a un nuevo objeto
const obj = {
    name: 'Felipe',
    age: 25,
}

const obj1 = {
    ...obj,
    country: 'CO'
}
console.log(obj1)

// --------------------------------------------------------------------------------
//  PROMISES.FINALLY
// Saber cuando ha terminado el llamado y poder ejecutar una función o lógica de código

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizó'))


// --------------------------------------------------------------------------------
// MEJORAS EN SINTAXIS DE REGEX (expresiones regulares)

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/  // expresiones regulares
const match = regexData.exec('2020-03-08')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)