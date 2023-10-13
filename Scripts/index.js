/** 
 *  Autor: Ignacio Carmona González
 *  Github: https://github.com/IgnacioCG28/Cajero-automatico.git
*/
document.addEventListener("DOMContentLoaded", () => {
  let cantidad = 1000;
  // Enlaces al DOM
  const inputElement = document.getElementById("cifra");
  const depositar = document.getElementById("depositar");
  const retirar = document.getElementById("retirar");
  const pantalla = document.getElementById("pantalla");

  pantalla.innerHTML = `<p>Ninguna acción realizada.<p>Saldo actual: ${cantidad}€<p> `;
  
  depositar.addEventListener("click", () => {
    const input = parseFloat(inputElement.value);
    if (isNaN(input) || input <= 0) {
      pantalla.innerHTML = `<p>Error, deposite una cantidad válida.<p><p>Saldo actual: ${cantidad}€<p>`;
    } else {
      cantidad += input;
      pantalla.innerHTML = `<p>Depositado ${input}€<p>Saldo actual: ${cantidad}€<p> `;
    }
  });

  retirar.addEventListener("click", () => {
    const input = parseFloat(inputElement.value);
    if (isNaN(input) || input < 0 || input > cantidad) {
      pantalla.innerHTML = `<p>Error, retire una cantidad válida.<p><p>Saldo actual: ${cantidad}€<p>`;
    } else {
      cantidad -= input;
      pantalla.innerHTML = `<p>Retirado ${input}€<p>Saldo actual: ${cantidad}€<p> `;
    }
  });
});
