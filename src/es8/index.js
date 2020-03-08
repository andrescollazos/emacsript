// --------------------------------------------------------------------------------
// OBJECT ENTRIES
// Devolver la clave y valores en una matriz

const data = {
    frontend: 'Felipe',
    backend: 'Andres',
    design: 'Roberto',
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// --------------------------------------------------------------------------------
// OBJECT VALUES
// Devuelve valores de un objeto a un arreglo

const data = {
    frontend: 'Felipe',
    backend: 'Andres',
    design: 'Roberto',
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

// --------------------------------------------------------------------------------
// PADDING

const str = 'hello'
// Anteponer elementos
console.log(str.padStart(7, 'Hi')) // Primer parametro es el max-length
// Al final
console.log(str.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))


// --------------------------------------------------------------------------------
// ASYNC-AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) // if ternario 
            ? setTimeout(() => resolve('Hello world'), 3000) //true
            : reject(new Error('Test error')) //false
        
    })
}

const helloAsync = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}
helloAsync()
