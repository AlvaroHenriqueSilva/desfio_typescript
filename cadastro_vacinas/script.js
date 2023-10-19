var data = new Date();
var ano = data.toLocaleString('default', { year: 'numeric' });
var mes = data.toLocaleString('default', { month: '2-digit' });
var dia = data.toLocaleString('default', { day: '2-digit' });
var hoje = "".concat(ano, "-").concat(mes, "-").concat(dia);
function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
var nome = document.querySelector('#nome');
var data_nascimento = document.querySelector('#data_nascimento');
var cpf = document.querySelector('#cpf');
var nome_vacina = document.querySelector('#nome_vacina');
var data_vacinacao = document.querySelector('#data_vacinacao');
var reforco = document.querySelector('#reforco');
var cadastrados = document.querySelector('#cadastrados');
var proximaData = addDays(data, 30);
data_vacinacao.value = hoje;
reforco.value = proximaData.toISOString().slice(0, 10);
var button = document.querySelector('#button');
var form = document.querySelector('form');
var listagem = [];
var h3 = document.createElement('h3');
h3.innerHTML = 'Nenhum registro cadastrado';
cadastrados.appendChild(h3);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    var novoCadastro = {
        nome: nome.value,
        data_nascimento: data_nascimento.value,
        cpf: cpf.value,
        nome_vacina: nome_vacina.value,
        data_vacinacao: data_vacinacao.value,
        reforco: reforco.value
    };
    listagem.push(novoCadastro);
    nome.value = '';
    nome_vacina.value = '';
    cpf.value = '';
    data_nascimento.value = '';
    nome.focus();
    var dataNascimentoFormatada = new Date(novoCadastro.data_nascimento);
    dataNascimentoFormatada.setDate(dataNascimentoFormatada.getDate() + 1);
    var dataVacinacaoFormatada = new Date(novoCadastro.data_vacinacao);
    dataVacinacaoFormatada.setDate(dataVacinacaoFormatada.getDate() + 1);
    var dataReforcoFormatada = new Date(novoCadastro.reforco);
    dataReforcoFormatada.setDate(dataReforcoFormatada.getDate() + 1);
    var div = document.createElement('div');
    div.innerHTML = "\n    <div class=\"fields\">\n        <div class=\"input-field\">\n            <label>Nome Completo</label>\n            <span>".concat(novoCadastro.nome, "</span>\n        </div>\n\n        <div class=\"input-field\">\n            <label>Data de Nascimento</label>\n            <span>").concat(dataNascimentoFormatada.toLocaleDateString('pt-BR'), "</span>\n        </div>\n\n        <div class=\"input-field\">\n            <label>CPF</label>\n            <span>").concat(novoCadastro.cpf, "</span>\n        </div>\n\n        <div class=\"input-field\">\n            <label>Nome da Vacina</label>\n            <span>").concat(novoCadastro.nome_vacina, "</span>\n        </div>\n\n        <div class=\"input-field\">\n            <label>Data de Vacina\u00E7\u00E3o</label>\n            <span>").concat(dataVacinacaoFormatada.toLocaleDateString('pt-BR'), "</span>\n        </div>\n\n        <div class=\"input-field\">\n            <label>Data de Refor\u00E7o (30 dias)</label>\n            <span>").concat(dataReforcoFormatada.toLocaleDateString('pt-BR'), "</span>\n        </div>\n    </div>\n    <hr>\n    ");
    if (h3.parentNode)
        cadastrados.removeChild(h3);
    cadastrados.appendChild(div);
});
