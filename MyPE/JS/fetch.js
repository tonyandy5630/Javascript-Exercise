var postAPI = 'https://jsonplaceholder.typicode.com/users'

fetch(postAPI)
    .then(response => response.json())
    .then(users => console.log(users))