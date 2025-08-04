const scriptUrl = 'https://script.google.com/macros/s/AKfycbzur7TOtQ5jrp1u7Hy9IF0GOoPA0ikxONSYzzn7yESxpikhh6tQZlOJUYYNVdaLt20/exec';
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
