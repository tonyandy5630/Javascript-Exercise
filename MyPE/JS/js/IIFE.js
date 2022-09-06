function car() {
    let cars = []
    const methods = {
        add(name) {
            cars.push(name)
            console.log(cars)
            return cars
        },
        delete(name) {
            if (cars.includes(name)) {
                cars.remove(name)
                return cars
            }
        },
        showCars() {
            return cars
        }
    }
    return methods
}

const cars = car()
cars.add('BMW')
cars.add('Ferrari')
console.log(cars.showCars())

console.log(car().showCars())