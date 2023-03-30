//  viacep.com.br/ws/01001000/json/
// Logradouro, Complemento, Bairro Localidade, UF, ddd

const inCep = document.querySelector("input[name=cep]");
const inBairro = document.querySelector("input[name=bairro]");
const inComplemento = document.querySelector("input[name=complemento]");
const inLogradouro = document.querySelector("input[name=logradouro]");
const inCodigoArea = document.querySelector("input[name=ddd]");
const inCidade = document.querySelector("input[name=cidade]");
const inUf = document.querySelector("input[name=uf]");

const btn = document.querySelector(".btnEnviar");

// https://viacep.com.br/ws/01001000/json/

btn.addEventListener("click", function (e) {
  // Não recarregar página
  e.preventDefault();

  const cep = inCep.value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);
      return response.json();
    })
    .then((data) => {
      const { localidade, ddd, complemento, bairro, logradouro, uf } = data;
      return {
        localidade,
        ddd,
        complemento,
        bairro,
        logradouro,
        uf,
      };
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      const msg = error.message;
      const type = error.type;
      const out = `${type} => ${msg}`;
      console.error(out);
    });
});
