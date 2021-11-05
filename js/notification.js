function sendNotification(title,body,image) { // funcion para crear el cuerpo de la notificacion
    
    Push.create(title,{
        body: body,
        icon: image,
      //  timeout: 11000,
        onClick: function () { 
            window.location= body;
            this.close();
        }
    });
}

function sendId() {// funcion que manda la notificacion

    let id = document.getElementById("notificar").value;
    console.log("id por input",id)

    fetch('https://rickandmortyapi.com/api/character/'+id)// se conultan los datos a la API
    .then(response => response.json())
    .then(data => { // se crean las variables de los datos que se incuiran en el cuerpo de la notificacion
        console.log(data)
        let title = data.name;
        let body = data.url;
        let image = data.image;

        sendNotification(title,body,image);// se llama la funcion y se le pasan los datos de la API

    })
    .catch(function(error) {// se capturan los errores
        console.log(error.message);
        alert ("el personaje no existe")
    });
    
}

buttonNotificar =  document.getElementById("buttonNotificar")// variable para acceder al boton de notificar
buttonNotificar.addEventListener("click", sendId, false); // se le agrega el evento de enviar notificacion al boton 