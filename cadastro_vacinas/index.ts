// Declarando uma data e formatando dia, mês e ano comforme nosso calendário
// ============================================================================
let data = new Date()
let ano = data.toLocaleString('default', { year: 'numeric' })
let mes = data.toLocaleString('default', { month: '2-digit' })
let dia = data.toLocaleString('default', { day: '2-digit' })

let hoje = `${ano}-${mes}-${dia}`

// Função para adicionar dias a uma data
// =======================================
function adicionarDias(date: any, days: any) {
    date.setDate(date.getDate() + days);
    return date;
}

// Pegando os campos dos inputs do HTML e tipando com HTMLInputElement
// ======================================================================
const nome = document.querySelector('#nome') as HTMLInputElement
const data_nascimento = document.querySelector('#data_nascimento') as HTMLInputElement
const cpf = document.querySelector('#cpf') as HTMLInputElement
const nome_vacina = document.querySelector('#nome_vacina') as HTMLInputElement
const data_vacinacao = document.querySelector('#data_vacinacao') as HTMLInputElement
const reforco = document.querySelector('#reforco') as HTMLInputElement
const cadastrados = document.querySelector('#cadastrados') as HTMLElement

let proximaData = adicionarDias(data, 30)

data_vacinacao.value = hoje
reforco.value = proximaData.toISOString().slice(0, 10)


const button = document.querySelector('#button')
const form = document.querySelector('form')

let listagem: any = []

let h3 = document.createElement('h3')
h3.innerHTML = 'Nenhum registro cadastrado'
cadastrados.appendChild(h3)

form?.addEventListener('submit', (e) => {
    e.preventDefault()

    // Criando um objeto literal com os valores dos campos 
    // ==============================================
    const novoCadastro = {
        nome: nome.value,
        data_nascimento: data_nascimento.value,
        cpf: cpf.value,
        nome_vacina: nome_vacina.value,
        data_vacinacao: data_vacinacao.value,
        reforco: reforco.value
    }

    // Adicionando um novo cadastro ao array (listagem) e limpando os campos do formulário
    // ======================================================================================
    listagem.push(novoCadastro)
    nome.value = ''
    nome_vacina.value = ''
    cpf.value = ''
    data_nascimento.value = ''
    nome.focus()

    let dataNascimentoFormatada = new Date(novoCadastro.data_nascimento)
    dataNascimentoFormatada.setDate(dataNascimentoFormatada.getDate() + 1)
    
    let dataVacinacaoFormatada = new Date(novoCadastro.data_vacinacao)
    dataVacinacaoFormatada.setDate(dataVacinacaoFormatada.getDate() + 1)

    let dataReforcoFormatada = new Date(novoCadastro.reforco)
    dataReforcoFormatada.setDate(dataReforcoFormatada.getDate() + 1)

    let div = document.createElement('div')
    div.innerHTML = `
    <div class="fields">
        <div class="input-field">
            <label>Nome Completo</label>
            <span>${novoCadastro.nome}</span>
        </div>

        <div class="input-field">
            <label>Data de Nascimento</label>
            <span>${dataNascimentoFormatada.toLocaleDateString('pt-BR')}</span>
        </div>

        <div class="input-field">
            <label>CPF</label>
            <span>${novoCadastro.cpf}</span>
        </div>

        <div class="input-field">
            <label>Nome da Vacina</label>
            <span>${novoCadastro.nome_vacina}</span>
        </div>

        <div class="input-field">
            <label>Data de Vacinação</label>
            <span>${dataVacinacaoFormatada.toLocaleDateString('pt-BR')}</span>
        </div>

        <div class="input-field">
            <label>Data de Reforço (30 dias)</label>
            <span>${dataReforcoFormatada.toLocaleDateString('pt-BR')}</span>
        </div>
    </div>
    <hr>
    `
    // Verificando se existe um filho de h3, caso exista ele remove
    // ===============================================================
    if (h3.parentNode) cadastrados.removeChild(h3)
    
    cadastrados.appendChild(div)
    
})