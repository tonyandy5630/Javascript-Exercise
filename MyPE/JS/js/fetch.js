var API = "http://localhost:3000/courses";

let courseBlock = document.querySelector("#course-block");

const start = () => {
    getCourses(renderCourse);
    handleCreate();
};

start();

function renderCourse(course) {
    let courseBlock = document.querySelector("#course-block");
    var htmls = course.map((course) => {
        return `
        <li class='item-${course.id}'> 
            <h4> ${course.name}</h4>
            <p> ${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Delete</button>
        </li>`
    })
    courseBlock.innerHTML = htmls.join('')
}

function getCourses(callback) {

    fetch(API)
        .then((response) => response.json())
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(API, options)
        .then((response) => response.json())
        .then(callback);
}

function handleDeleteCourse(id, callback) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(API + "/" + id, options)
        .then((response) => response.json())
        .then(() => {
                var toDeleteItem = document.querySelector(`.item-${id}`)
                if (toDeleteItem) {
                    toDeleteItem.remove()
                }
            }

        );
}

function handleCreate() {
    var btn = document.querySelector('#create')
    btn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value
        var desc = document.querySelector('input[name="desc"]').value

        var formData = {
            name: name,
            description: desc
        }
        createCourse(formData, getCourses(renderCourse))

    }
}