
const url_string = window.location.href;

const url = new URL(url_string);

const param = url.searchParams.get("nome_completo");





let primeiroValor = jogadores.find(e => e.nome_completo == param);


const cria_cartao = (entrada, alvo) => {
    const container = document.createElement('div');
    container.className = 'card'


    container.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,1) 16%, rgba(0,0,0,0.6474964985994398) 45%, rgba(0,0,0,0) 70%), url('${entrada.imagem}')`;


    const actions = document.createElement('img');
    actions.className = 'card_actions'
    actions.src = 'assets/imgs/Star.png'

    container.appendChild(actions);

    alvo.appendChild(container);


}

const cria_nome_completo = (entrada, alvo) => {
    const nome_completo = document.createElement('div')
    nome_completo.id = 'nome_completo'
    nome_completo.innerHTML = entrada.nome_completo
    alvo.appendChild(nome_completo);


}

function transformString(string) {
    var words = string.toLowerCase().split(' ');

    for (var i = 0; i < words.length; i++) {
        var word = words[i];


        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    var newString = words.join(' ');
    return newString;
}

const cria_detalhe = (entrada, alvo) => {
    const container = document.createElement('div');
    container.className = 'detalhes'

    const posicao = document.createElement('div')
    const altura = document.createElement('div')
    const nascimento = document.createElement('div')
    const descricao = document.createElement('div')


    posicao.id = 'posicao'
    altura.id = 'altura'
    nascimento.id = 'nascimento'
    descricao.id = 'descricao'



    posicao.innerHTML = transformString(entrada.posicao)

    nascimento.innerHTML = entrada.nascimento
    descricao.innerHTML = entrada.descricao
    altura.innerHTML = entrada.altura



    container.appendChild(posicao);
    container.appendChild(altura);
    container.appendChild(nascimento);
    container.appendChild(descricao);



    alvo.appendChild(container);


}

const cria_botao_voltar = (alvo) => {
    const container = document.createElement('button');
    container.id = 'voltar_buttom'
    const icon = document.createElement('i');
    icon.className = 'material-symbols-outlined'
    icon.innerHTML = 'arrow_back_ios'
    container.appendChild(icon)
    const content = document.createElement('span');
    content.id = 'voltar_content'
    content.innerHTML = 'voltar'
    container.appendChild(content)
    container.addEventListener("click", function () {
        window.history.back();
    });
    alvo.appendChild(container);
}

const content = document.getElementById("content")
cria_cartao(primeiroValor, content)
cria_nome_completo(primeiroValor, content)
const bottom = document.getElementById("bottom")
cria_detalhe(primeiroValor, bottom)

cria_botao_voltar(bottom)



