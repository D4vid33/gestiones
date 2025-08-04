const scriptUrl = 'https://script.google.com/macros/s/AKfycbx5z2T0ILFx3cwOjW3wj05V4NaNACz66fVPHJhY-xloGCPTo2MA7llgU62fKB0UL4KO/exec';
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
