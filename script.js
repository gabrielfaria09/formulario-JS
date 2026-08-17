// Usado querySelector para pegar o primeiro formulário da página
const form = document.querySelector("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputIdade = document.getElementById("idade");
const error = document.getElementById("error");

function validateName() {
  let value = inputNome.value.trim();
  return value.length >= 3;
}

function validateEmail() {
  let email = inputEmail.value;
  return email.indexOf("@") !== -1;
}

function validateIdade() {
  let idade = Number(inputIdade.value);
  return idade >= 18;
}

function validateForm() {

    error.innerHTML = "";

  if (!validateName()) {
    error.innerHTML = `O nome "${inputNome.value}" é curto demais, precisa ter 3 ou mais caracteres.`;
    return false;
  }
  
  if (!validateEmail()) {
    error.innerHTML = "O email é inválido.";
    return false;
  }
  
  if (!validateIdade()) {
    error.innerHTML = "Você é menor de idade, não pode se cadastrar.";
    return false;
  }

  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    error.innerHTML = "Validando...";

    setTimeout(function (){
        window.location.href = "telaSucesso.html";}, 3000);
  }
});