<script>
        // URL de tu Google Apps Script (REEMPLAZA ESTA URL)
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzwHkKPAXIojhgg4F00RhA-R8C4LvFkf9-WNqrRTUgDiHiQOs8h8a6U8jeTDHo7_reP/exec';
        
        const form = document.getElementById('gestionForm');
        const notification = document.getElementById('notification');
        
        function showNotification(message, isSuccess) {
            notification.textContent = message;
            notification.className = `notification ${isSuccess ? 'success' : 'error'} show`;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        form.addEventListener('submit', e => {
            e.preventDefault();
            
            // Obtener valores
            const idCliente = document.getElementById('idCliente').value;
            const detalle = document.getElementById('detalle').value;
            
            // Crear objeto con datos
            const formData = {
                idCliente: idCliente,
                detalle: detalle
            };
            
            // Enviar datos
            fetch(scriptURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    showNotification('✅ Datos guardados correctamente', true);
                    form.reset();
                } else {
                    throw new Error(data.error || 'Error desconocido');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showNotification('❌ Error al guardar: ' + error.message, false);
            });
        });
    </script>