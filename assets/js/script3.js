let resul = document.querySelector(".resultado");

const sumar = () => {
  let val1 = parseInt(document.getElementById("valor1").value);
  let val2 = parseInt(document.getElementById("valor2").value);
  let resultado = val1 + val2;

  resul.innerHTML = `${resultado}`;
  return resultado;
};

const restar = () => {
  let val1 = parseInt(document.getElementById("valor1").value);
  let val2 = parseInt(document.getElementById("valor2").value);
  let resultResta = val1 - val2;
  if (resultResta < 0) {
    resultResta = 0;
  }
  resultado = resultResta;
  resul.innerHTML = `${resultado}`;
  return resultado;
};

const validacion1 = (val1, val2) => {
  val1 = parseInt(document.getElementById("valor1").value);
  val2 = parseInt(document.getElementById("valor2").value);
  const pattern1 = /[0-9]/gim;
  if (pattern1.test(val1) == false || pattern1.test(val2) == false) {
    alert("ingrese variables en numero");
  }sumar();
};
const validacion2 = () => {
  let vala = document.getElementById("valor1").value;
  let valb = document.getElementById("valor2").value;
  const pattern2 = /[0-9]/gim;
  if (pattern2.test(vala) == false || pattern2.test(valb) == false) {
    alert("ingrese variables en numero");
    }
    restar();
}
