const form = document.getElementById(`form-atividade`);
const cadastrado =
  "<img src=`./images/telefone-icon.png` alt=`icone de telefone/>";
const contatos = [];
const telefones = [];

let linhas = ``;

form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaQuantidade();
});

function adicionaLinha() {
  const inputContato = document.getElementById(`contato`);
  const inputTelefone = document.getElementById(`telefone`);

  if (contatos.includes(inputContato.value)) {
    alert(`Este ${inputContato.value} já existe em sua Agenda`);
  } else {

    contatos.push(inputContato.value);
    telefones.push(parseFloat(inputTelefone));

    let linha = `<tr>`;
    linha += `<td> ${inputContato.value}</td>`;
    linha += `<td> ${inputTelefone.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
  }
  inputContato.value = ``;
  inputTelefone.value = ``;
}
function atualizaTabela() {
  const corpoTabela = document.querySelector(`tbody`);
  corpoTabela.innerHTML = linhas;
}

/* function atualizaQuantidade() {
  const quantidadeContato = calculoTotal();

  document.getElementById(`quantidade`).innerHTML = quantidadeContato;
}

function calculoTotal() {
    let somaContatos = 0;

    for (let i = 0; i < contatos.length; i++) {
      somaContatos += contatos[i];
    }
    return somaContatos + contatos.length;
  } */