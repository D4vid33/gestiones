const scriptUrl = 'https://script.google.com/macros/s/AKfycbyDGQvMjBdzfCPEW1NTsG69ezIzSVvh-1FQ9JdsaG7gOGHICll2A79YmvblTYDXUv20Ow/exec';
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
