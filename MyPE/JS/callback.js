const isOdd = toCheck => toCheck % 2 !== 0

isOdd(4)
isOdd(5)

const exclaim = string => string.concat('!')


console.log(exclaim(exclaim("hello")))

const doubleChars = str => {
    const chars = str.split('')
    const newArr = chars.map(char => char.concat(`${char}`))
    return newArr.join('')
}

doubleChars('ssssnake')

const atLeastTwo = (arr, callback) => arr.filter(callback).length >= 2


const ans = atLeastTwo([1, 2, 3, 4], t => t >= 3)
console.log(ans)
let count = 1;
const groupBy = (input, callback) => input.reduce((previous, current) => {

    var key = callback(current)
        // ? instantiate a new object if it is the first time and return undefined. if it's already exist then push the object has same property value into it
    if (previous[key]) {
        previous[key].push(current)
    } else {
        previous[key] = [current]
    }

    return previous;
}, {}, )

const input = [{
        name: 'John',
        yearOfBirth: 1988,
        placeOfBirth: 'New York',
    },
    {
        name: 'Nancy',
        yearOfBirth: 1963,
        placeOfBirth: 'New York',
    },
    {
        name: 'John',
        yearOfBirth: 1980,
        placeOfBirth: 'Toronto',
    },
];

// 1
console.log(groupBy(input, t => t.name));

// 2
console.log(groupBy(input, t => isOdd(t.yearOfBirth)));

console.log("REPEAT")

const repeat = (str, times, callback) => {
    for (let i = 0; i < times; i++) {
        str = callback(str)
    }
    return str
}
console.log(repeat('infinite power', 3, exclaim))

console.log(repeat('triple', 2, doubleChars))

console.log(repeat('trogdor', 3, t => `°${t}°`))