const icon = document.getElementById('icon');
const body = document.body;

icon.addEventListener('click', () => {
    // Alternar clases de dark mode
    body.classList.toggle('dark-mode');

    // Cambiar el icono
    if (body.classList.contains('dark-mode')) {
        icon.src = "image/sun.svg"; // Cambiar a icono de sol
    } else {
        icon.src = "image/moon.svg"; // Cambiar a icono de luna
    }
});

const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  form.addEventListener('submit', function(event) {
    // Expresión regular para validar el formato del correo
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailValue = emailInput.value;

    if (!emailPattern.test(emailValue)) {
      // Evita que el formulario se envíe si el email es incorrecto
      event.preventDefault();

      // Muestra el mensaje de error
      emailError.style.display = 'block';
    } else {
      // Si el correo es válido, oculta el mensaje de error (en caso de que se haya mostrado antes)
      emailError.style.display = 'none';
    }
});