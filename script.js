const scriptUrl = 'https://script.google.com/macros/s/AKfycbw91PogAAg5rABLVxNwYyGJZySqZtxipbOFMg4l7VPohoGd6yX6fR3_Ti0X4q0SKwhiUQ/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
            .then(response => Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Envíado",
        icon: "success"}))
            .then( () => { window.location.reload() } )
            .catch(error => console.error('Error', error.message))
})
