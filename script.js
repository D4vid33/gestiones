const scriptUrl = 'https://script.google.com/macros/s/AKfycbyTzAIeZPFP6mGY3r7__EJZqsmXpZgCesWjnMqtpekHnUa5sPhJIDhHKa_Y8zcNmjiT/exec';
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
