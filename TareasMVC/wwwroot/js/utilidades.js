﻿async function manejarErrorApi(respuesta) {
    let mensajeError = '';

    if (respuesta.status === 400) {
        mensajeError = await respuesta.text();
    } else if (respuesta.status === 404) {
        mensajeError = recursoNoEncontrado
    } else {
        mensajeError = errorInesperado
    }

    mostrarMensajeError(mensajeError);
}

function mostrarMensajeError(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: mensaje
    })
}

function confirmarAccion({ callBackAcceptar, callBackCancelar, titulo }) {
    Swal.fire({
        title: titulo || 'Realmente deseas hacer esto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        focusConfirm: true
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            callBackAcceptar();
        } else if (callBackCancelar) {
            callBackCancelar();
        }
    })
}