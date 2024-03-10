let form = document.getElementById("formulario");
let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");

const limpiaErrores = () => {
  errorNombre.innerHTML = "";
  errorAsunto.innerHTML = "";
  errorMensaje.innerHTML = "";
};

const validar = (nombre, asunto, mensaje) => {
  let validacion = true;

  const patternName = /^[A-Za-z]+$/gim;
  if (patternName.test(nombre) == false) {
    errorNombre.innerHTML = "ingrese un nombre Valido";
    validacion = false;
  }

  const patternAsunto = /^[A-Za-z]+$/gim;
  if (patternAsunto.test(asunto) == false) {
    errorAsunto.innerHTML = "ingrese un asunto Valido";
    validacion = false;
  }

  const patternMensaje = /^[A-Za-z]+$/gim;
  if (patternMensaje.test(mensaje) == false) {
    errorMensaje.innerHTML = "ingrese un asunto Valido";
    validacion = false;
  }

  return validacion;
};

const ejecutar = (event) => {
  event.preventDefault();
  limpiaErrores();

  let inputNombre = document.getElementById("nombre").value;
  let inputAsunto = document.getElementById("asunto").value;
  let inputMensaje = document.getElementById("mensaje").value;

  let resultado = validar(inputNombre, inputAsunto, inputMensaje);

  if (resultado) {
    exito();
    inputNombre.innerHTML = "";
    inputAsunto.innerHTML = "";
    inputMensaje.innerHTML = "";
  }
};

const exito = () => {
  alert("formulario enviado con exito.");
};

form.addEventListener("submit", ejecutar);
