//Mario Alberto Quiñonez Bahena         10A IDGS
const traerTodo = fetch("https://reqres.in/api/users?page=2");
const listUsers = () => {
  traerTodo
    .then((data) => data.json())
    .then((data) => {
      let html = "";
      let users = data.data;
      users.forEach((u) => {
        html += `<tr>
                        <th class="col">${u.id}</th>
                        <td class="col"><img src="${u.avatar}"></td>
                        <td class="col">${u.first_name}</td>
                        <td class="col">${u.last_name}</td>
                        <td class="col">${u.email}</td>
                        <td class="col text-center">
                            <div class="float-md-start mb-3 ms-md-3"><btn class="btn btn-info" data-bs-toggle="modal" data-bs-target="#Actualizar" onclick=info(${u.id})>Editar</btn></div>
                            <div class="float-md-end mb-3 ms-md-3"><btn class="btn btn-danger" onclick=borrar(${u.id})>Eliminar</btn></div>
                                                        </td>
                    </tr>`;
      });
      document.getElementById("relleno").innerHTML = html;
    });
};

listUsers();

const agregarUser = () => {
  const nombre = document.getElementById("username").value;
  const apellido = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;

  if (nombre == "" || apellido == "" || email == "") {
    alert("Todos los campos son requeridos.");
  } else {
    let data = {
      name: nombre,
      last_name: apellido,
      email: email,
      job: "scrum master"
    };
    const create = fetch("https://reqres.in/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    create
      .then((data) => data.json())
      .then((data) => {
        alert("Usuario creado el " +data.createdAt)
        })
        .catch( error => alert("sucedio un error inesperado. "+ error));
  }
};

const info = (id) => {
  const singleUser = fetch("https://reqres.in/api/users/" + id);
  singleUser
    .then((data) => data.json())
    .then((data) => {
      let datos = data.data;
      document.getElementById("idupd").value = datos.id;
      document.getElementById("usernameupd").value = datos.first_name;
      document.getElementById("lastnameupd").value = datos.last_name;
      document.getElementById("emailupd").value = datos.email;
      document.getElementById("foto").innerHTML = `<img src="${datos.avatar}">`;
    });
};
const borrar = (id) => {
  const deleteUser = fetch("https://reqres.in/api/users/" + id, {
    method: "DELETE",
  });
  deleteUser.then((d) => alert("Usuario eliminado. status: " + d.status))
  .catch( error => alert("sucedio un error inesperado. "+ error));
};

const actualizar = () => {
  const nombre = document.getElementById("usernameupd").value;
  const apellido = document.getElementById("lastnameupd").value;
  const email = document.getElementById("emailupd").value;
  const id = document.getElementById("idupd").value;

  if (nombre == "" || apellido == "" || email == "") {
    alert("Todos los campos son requeridos.");
  } else {
    let data = {
      name: nombre,
      last_name: apellido,
      job: "Product Owner",
      email: email,
    };
    const update = fetch("https://reqres.in/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    update.then((data) => alert("Usuario Actualizado. Status "+data.status))
    .catch( error => alert("sucedio un error inesperado. "+ error));
  }
};
