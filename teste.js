
function b() {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(r => r.json())
    .then(date => console.log(date))
    // const result = await api.json()
    // console.log(result)
}

b()