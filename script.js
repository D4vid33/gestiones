const scriptUrl = 'https://script.google.com/macros/s/AKfycbxoCJdBV-dRBKjtiDkI8X23HBHivCxG5i9m2tjxzatotv6iV8QifFARhdqGCU5y9CnR/exec';
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
