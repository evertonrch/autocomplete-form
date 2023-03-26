//  viacep.com.br/ws/01001000/json/
// Logradouro, Complemento, Bairro Localidade, UF, ddd

const inCpf = document.querySelector("input[name=cpf]");
const inBairro = document.querySelector("input[name=cpf]");
const inComplemento = document.querySelector("input[name=cpf]");
const inLogradouro = document.querySelector("input[name=cpf]");
const inCodigoArea = document.querySelector("input[name=cpf]");
const inCidade = document.querySelector("input[name=cpf]");
const inUf = document.querySelector("input[name=cpf]");

const btn = document.querySelector(".btnEnviar");

btn.addEventListener("click", function (e) {
  // Não recarregar página
  e.preventDefault();
});
