cards_fem_div = document.getElementById('cards_fem')
cards_mas_div = document.getElementById('cards_mas')



function transformString(string) {
  var words = string.toLowerCase().split(' ');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];


    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  var newString = words.join(' ');
  return newString;
}


const cria_cartao = (entrada, alvo) => {
  const container = document.createElement('div');
  container.className = 'card'
  const title = document.createElement('h5');
  title.className = 'card_title'
  const subtitle = document.createElement('h4');
  subtitle.className = 'card_subtitle'




  container.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,1) 16%, rgba(0,0,0,0.6474964985994398) 45%, rgba(0,0,0,0) 70%), url('${entrada.imagem}')`;
  title.innerHTML = entrada.nome
  subtitle.innerHTML = transformString(entrada.posicao);

  const actions = document.createElement('img');
  actions.className = 'card_actions'
  actions.src = 'assets/imgs/Star.png'

  const card_content = document.createElement('div');
  card_content.className = 'card_content'
  card_content.appendChild(title);
  card_content.appendChild(subtitle);



  const card_bottom_bar = document.createElement('div');
  card_bottom_bar.className = 'card_bottom_bar'


  card_bottom_bar.appendChild(card_content);
  card_bottom_bar.appendChild(actions);


  container.appendChild(card_bottom_bar);
  container.addEventListener('click', function () {
    const param = entrada.nome_completo; // Defina o valor do parâmetro aqui
    window.location.href = 'detalhes.html?nome_completo=' + encodeURIComponent(param);
  });
  alvo.appendChild(container);


}

jogadores.forEach((e) => {


  if (e.elenco == 'feminino') {
    cria_cartao(e, cards_fem_div);
  }
  if (e.elenco == 'masculino') {
    cria_cartao(e, cards_mas_div);
  }
})

const cria_final_pagina = (alvo) => {
  const final_pagina = document.createElement('div')
  final_pagina.id = 'final_pagina'
  alvo.appendChild(final_pagina);


}

cria_final_pagina(document.body)

const final_pagina = document.getElementById("final_pagina")
window.addEventListener('scroll', () => {
    if (userReachedBottom()) {
        final_pagina.style.opacity='0'
    } else {
        final_pagina.style.opacity='1'
    }
  });
  
  function userReachedBottom() {
    return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
  }