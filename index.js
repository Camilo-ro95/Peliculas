// Variables de entrada HTML
const form = document.getElementById('form');
//const  btnBoton = document.getElementById('btnBoton');
// inputs
const inputName = document.getElementById('inputName');
const inputLastname = document.getElementById('inputLastname');
const inputPhone = document.getElementById('inputPhone');
const inputAddress = document.getElementById('inputAddress');

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    // ATRAPAR DATOS ()
    const name = inputName.value;
    const lastName = inputLastname.value;
    const phone = inputPhone.value;
    const address = inputAddress.value;

    // VALIDACION()

    objetoUsuario = {
        name,
        lastName,
        phone,
        address
    }

    guardarLocal(objetoUsuario);
})

function guardarLocal(objetoUsuario) {

    // INGRESA {}

    //declarar un array
    let objetArray;

    if (localStorage.getItem('usuarios') === null) { // comprobar si hay datos en el local storage con Key = 'usuarios'
        objetArray = []; // inicializar array contenedor de objetos
    } else {
        objetArray = JSON.parse(localStorage.getItem('usuarios'))  // objeto string -> objet js
    }

    // agregar el nuevo usuario en la última posición del array
    objetArray.push(objetoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(objetArray))

}
