function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const contentField = document.getElementById('content_field');

  // Alerta 
  const element = document.createElement('p');
  element.setAttribute('id', 'alert');
  element.classList.add("alert_color");

  // Texto de la alerta
  const message = document.createTextNode("El correo no coincide");
  element.appendChild(message);

  // Detector de evento en confirmación de correo electrónico
  emailComfirmField.addEventListener('input', () => {
    if (form.email.value !== form.email_confirm.value) {
      // El correo electrónico de confirmación no coincide
      if (!document.getElementById('alert')) {
        // Insertar alerta si no concide el correo
        contentField.parentNode.insertBefore(element, contentField);
        emailComfirmField.classList.add("alert_bar");
      };
    } else {
      // Email confirmado 
      emailComfirmField.classList.remove("alert_bar");
      if (document.getElementById('alert')) {
        // Remover el anuncio
        element.parentNode.removeChild(element);
      }
    }
  });
}
window.onload = function() {
  emailValidation();
};