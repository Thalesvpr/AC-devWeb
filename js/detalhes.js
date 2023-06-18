
const url_string = window.location.href;

const url = new URL (url_string);

const param = url.searchParams.get("nome_completo");




// var param = params.get('param');

var primeiroValor = jogadores.find(e => e.nome_completo == param);


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
const cria_detalhe = (entrada, alvo) => {
    const container = document.createElement('div');
    container.className = 'detalhes'
    const nome_completo = document.createElement('div')
    const posicao = document.createElement('div')
 
    const nascimento = document.createElement('div')
    const descricao = document.createElement('div')
    const altura = document.createElement('div')

    nome_completo.id = 'nome_completo'
    posicao.id = 'posicao'
   
    nascimento.id = 'nascimento'
    descricao.id = 'descricao'
    altura.id = 'altura'
    


nome_completo.innerHTML = entrada.nome_completo
posicao.innerHTML = entrada.posicao

nascimento.innerHTML = entrada.nascimento
descricao.innerHTML = entrada.descricao
altura.innerHTML = entrada.altura


container.appendChild(nome_completo);
container.appendChild(posicao);

container.appendChild(nascimento);
container.appendChild(descricao);
container.appendChild(altura);


alvo.appendChild(container);

    
}

const content =  document.getElementById("content")
cria_cartao(primeiroValor, content)
cria_detalhe(primeiroValor, content)
