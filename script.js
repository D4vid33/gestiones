const scriptUrl = 'https://script.google.com/macros/s/AKfycbylh_4nXZNGpcDE-ind__iqUN0ywLu5I-drofnxNDGItj4iMU_TLHynFM3_MAgaK3wj6g/exec';
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
