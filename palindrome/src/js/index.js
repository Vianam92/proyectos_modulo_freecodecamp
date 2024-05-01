const inputElement = document.querySelector("#text-input");
const btnElement = document.querySelector("#check-btn");
const valitorElement = document.querySelector("#result");
const validatorInput = document.querySelector(".text-validator");

function esPalindromo(palabra) {
    debugger
 const strMinusculas = palabra.toLowerCase();
  
 const re = /[\W_]/g; 
 const strSinCaracteresEspeciales = strMinusculas.replace(re, '');
 
 const strInvertida = strSinCaracteresEspeciales.split('').reverse().join('');
 return strInvertida === strSinCaracteresEspeciales;
}

btnElement.addEventListener("click", () => {
  valitorElement.textContent = "";
  if (inputElement.value === "") {
    validatorInput.textContent = "Please input a value";
    alert("Please input a value")
  } else {
    if (esPalindromo(inputElement.value)) {
      valitorElement.textContent = `${inputElement.value} is a palindrome`;
    } else {
      valitorElement.textContent = `${inputElement.value} is not a palindrome`;
    }
  }
});
