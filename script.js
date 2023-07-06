const form = document.getElementById('registration-form');
const output = document.getElementById('output');
const rangoValor = document.getElementById('rango-valor');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};

  for (let [name, value] of formData) {
    data[name] = value.toUpperCase();
  }

  output.innerHTML = JSON.stringify(data, null, 2);
  output.style.display = 'block';
  form.style.display = 'none';
});

rangoValor.addEventListener('input', function() {
  output.style.display = 'none';
  const valor = rangoValor.value;
  rangoValor.nextElementSibling.value = valor;
});