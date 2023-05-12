let form = document.querySelector('form');

form.addEventlistener('submit', function (evento){
    evento.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = {
        email: email,
        contraseña: contraseña
    };

console.log(data);

let dataJSON = JSON.stringify(data);


});