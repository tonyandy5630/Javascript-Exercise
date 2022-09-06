// this.firstname = 'thanh'
// this.lastname = 'tu'

// const teacher = {
//     firstname: 'van',
//     lastname: 'a',

//     getFullname() {
//         return `${this.firstname} ${this.lastname}`
//     }

// }

// console.log(teacher.getFullname())
// const newt = teacher.getFullname.bind(teacher)

// console.dir(newt())
const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)


const car = (
    () => {
        const button = $('button')
        const cars = []
        const ul = $('ul')
        return {
            add(name) {
                cars.push(name)
            },
            delete(toRemove) {
                cars.splice(toRemove, 1)
            },
            render() {
                const html = cars.map((car, indexOfCar) => `
                <li class='delete'  data-index='${indexOfCar}'>${car}
                <span > &times </span>
                </li> 
                `).join('')
                ul.innerHTML = html
            },
            handleDelete(e) {
                let deleteBtn = e.target.closest('.delete')
                if (deleteBtn) {
                    const index = deleteBtn.dataset.index
                    this.delete(index)
                    this.render()
                }
            },
            init() {
                const _this = this
                const input = $('input')
                button.onclick = () => {
                        let inputValue = input.value
                        if (inputValue.trim() !== '') {
                            car.add(inputValue)
                            $('input').value = ''
                            input.focus()
                            _this.render()
                        }
                    }
                    // ? this o day la dang tro toi obj tong,
                    //? neu khong bind thi no se  gan vao onclick 
                    //? ma onclick la property cua ul => dang tro toi ul neu khong bind()
                ul.onclick = _this.handleDelete.bind(this)
            },

        }
    }
)();

car.init()

const logger = (msg) => {
    console.log('hi')
}

const doSomething = (logger) => {
    console.log('hi 2')
}

doSomething(logger)