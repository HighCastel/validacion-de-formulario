function emailValidation() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('email_confirm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (emailInput.value.trim() !== confirmEmailInput.value.trim()) {
            // Crea el elemento de mensaje de error
            const errorElement = document.createElement('p');
            errorElement.textContent = 'El correo electrónico no coincide';
            errorElement.classList.add('alert');
            errorElement.style.color = '#d14539'; // Aplica el color de texto deseado

            // Agrega el mensaje de error debajo del campo de confirmación de correo electrónico
            const confirmEmailParent = confirmEmailInput.parentElement;
            confirmEmailParent.appendChild(errorElement);

            // Aplica estilo al campo de confirmación de correo electrónico
            
            confirmEmailInput.style.border = 'solid 1px #d14539';

            // Limpia el mensaje de error y restaura el estilo después de 3 segundos
            setTimeout(function() {
                confirmEmailInput.style.backgroundColor = '';
                confirmEmailInput.style.border = 'solid 1px #beb9b7';
                confirmEmailParent.removeChild(errorElement);
            }, 3000);
        } else {
            // Si los correos coinciden, enviar el formulario
            form.submit();
        }
    });
}

window.onload = emailValidation;
