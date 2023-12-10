const cuentas = [
  { email: "mali@mail.com", password: "pass", nombre: "Mali", saldo: 200 },
  { email: "gera@mail.com", password: "pass", nombre: "Gera", saldo: 290 },
  { email: "maui@mail.com", password: "pass", nombre: "Maui", saldo: 67 }
];

buttom.addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let usuario = cuentas.find((cuenta) => cuenta.email === email && cuenta.password === password)
  if (usuario) {
    window.location.href = "home.html";
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
});
