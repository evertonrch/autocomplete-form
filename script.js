//  viacep.com.br/ws/01001000/json/
// Logradouro, Complemento, Bairro Localidade, UF, ddd

let inCep = document.querySelector("input[name=cep]");
let inBairro = document.querySelector("input[name=bairro]");
let inComplemento = document.querySelector("input[name=complemento]");
let inLogradouro = document.querySelector("input[name=logradouro]");
let inCodigoArea = document.querySelector("input[name=ddd]");
let inCidade = document.querySelector("input[name=cidade]");
let inUf = document.querySelector("input[name=uf]");

const btn = document.querySelector(".btnEnviar");

const cepError = document.querySelector(".cep-error");

const displayInputValue = function (result) {
  inBairro.value = result.bairro || "empty";
  inLogradouro.value = result.logradouro || "empty";
  inCidade.value = result.localidade || "empty";
  inCodigoArea.value = result.ddd || "empty";
  inUf.value = result.uf || "empty";
  inComplemento.value = result.complemento || "empty";
};

const clearInputs = function () {
  inBairro.value =
    inComplemento.value =
    inLogradouro.value =
    inCodigoArea.value =
    inCidade.value =
    inUf.value =
      "";
};

inCep.addEventListener("focusout", function (e) {
  const cep = inCep.value;
  cepError.textContent = "";

  if (cep.length > 8 || cep.length < 8) {
    cepError.style.color = "red";
    cepError.textContent = `Tamanho de CEP inválido (${cep.length}), esperado 8`;
    clearInputs();
    return;
  }

  const getCepData = async function (cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if (!response.ok) throw new Error("asdas");

      const data = await response.json();

      if (!data) throw new Error(`Json error`);

      displayInputValue(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  getCepData(cep);
});

btn.addEventListener("click", function (e) {
  // Não recarregar página
  e.preventDefault();
  if (cepError.textContent)
    cepError.textContent = "Não foi possivel submeter o formulário";
  else inCep.value = "";
  clearInputs();
});
