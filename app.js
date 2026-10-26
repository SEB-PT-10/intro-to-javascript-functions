let username = 'Detective Conan on the case!'

function printBanner(myVar, otherVar, banana){
    console.log('=======================')
    console.log(myVar, otherVar, banana)
    console.log('=======================')
}

// printBanner('my message', '🎀 look a bow')
// printBanner('I ate rice and beans for lunch')
// printBanner()

// let name = 
function sayHello(name){
    console.log(`Hello ${name}`)
}

// sayHello(true)
// sayHello(30)




function planetHasWater (planet) {
    // console.log(planet === 'Earth' || planet === 'Mars')
    // console.log(planet === 'Mars')
    // console.log(planet)
    if (planet === 'Earth' || planet === 'Mars') {
        console.log(`${planet} is true`)
    } else {
        console.log(`${planet} is false`)
    }
}

// planetHasWater('Earth')
// planetHasWater('Mars')
// planetHasWater('Venus')

function greet(name){
    console.log(`Hello ${name}`) 
    return `Hello ${name}`
}

// console.log(greet('Omar'))

let total = add(1, 'something')

function add (numA, numB) {
    return numA + numB
}

// console.log('total: ', total)


const add2 = function(num1, num2){
    return num1 + num2
}

// console.log(add2(3, 4))

const add3 = (x, y) => {
    return x + y
}

console.log(add3(5, 10))

