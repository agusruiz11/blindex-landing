


//Temporizador de actividad. Si no hubo actividad en 5 minutos volver al inicio
var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    }); 


});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 4) { // 20 minutes
        window.location.href = "/elegituvidrio/index.html"; // ruta absoluta: desde provincias/ y exposicion-sol/ la relativa daba 404
    }
}

  function codigo_qr() {
      Swal.fire({
        text: 'Descargá a tu teléfono un PDF con toda la información',
        imageUrl: '/elegituvidrio/images/qr/qr_pdf.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'QR',
        animation: false,
         confirmButtonText:'<i class="fa fa-thumbs-up"></i> ¡Listo!',

      })
  }

 function enviar_email() {
      Swal.fire({
        title: 'Enviar detalles por email',
        text: 'Completá tu dirección de email',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                //throw new Error(response.statusText)
                throw new Error('Error al enviar')
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                //`Request failed: ${error}`
                `Error: No se pudo enviar`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'ok',
            imageUrl: 'ij'
          })
        }
      })
    }

//Boton vovler
function goBack() {
  window.history.back();
}

