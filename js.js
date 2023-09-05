const traerTodo = fetch("https://reqres.in/api/users?page=2")
// const singleUser = fetch("https://reqres.in/api/users/"+id)
// 
// const update = fetch("https://reqres.in/api/users/"+id,{method: "PUT",body: JSON.stringify(data)})
// const deleteUser = fetch("https://reqres.in/api/users/"+id,{method:"delete"})

//traerTodo


const listUsers = () => {
    
    traerTodo.then(data => data.json()).then(data => {
        let html = '';
        let users = data.data;
        console.log(users);
        users.forEach(u => {
            html += `<tr>
                        <th class="col">${u.id}</th>
                        <td class="col"><img src="${u.avatar}"></td>
                        <td class="col">${u.first_name}</td>
                        <td class="col">${u.last_name}</td>
                        <td class="col">${u.email}</td>
                        <td class="col"><btn class="btn btn-info" onclick=info(${u.id})>Editar</btn></td>
                        <td class="col"><btn class="btn btn-danger" onclick=borrar(${u.id})>Eliminar</btn></td>
                    </tr>`;
        });
        document.getElementById("relleno").innerHTML = html;
    })
}

listUsers()


const agregarUser = () => {
    const nombre = document.getElementById("username").value;
    const apellido = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    let data = {
        first_name: nombre,
        last_name: apellido,
        email: email
    }
    const create = fetch("https://reqres.in/api/users",
                                    {method:"POST",
                                    body: JSON.stringify(data)
                                })
    create.then(data => data.json()).then(data => alert("Uusuario registrado."));
}

const info = (id) => {
    const singleUser = fetch("https://reqres.in/api/users/"+id)
    singleUser.then(data =>data.json())
    .then(data => console.log(data.data));
}
const borrar = (id) => {
    const deleteUser = fetch("https://reqres.in/api/users/"+id,{method:"delete"});
    deleteUser.then(d => d.json()).then(d => console.log("Uusuario eliminado"))
}
const actualizar = () => {
    //sadasdas
}
avatar
: 
"https://reqres.in/img/faces/7-image.jpg"
email
: 
"michael.lawson@reqres.in"
first_name
: 
"Michael"
id
: 
7
last_name
: 
"Lawson"