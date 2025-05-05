let pantalla = document.getElementById('pantalla');

function agregarValor(valor) {
  pantalla.value += valor;
}

function borrarTodo() {
  pantalla.value = '';
}

function borrarUltimo() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = 'Error';
  }
}
