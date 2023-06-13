cards_fem_div = document.getElementById('cards_fem')
cards_mas_div = document.getElementById('cards_mas')



const cria_cartao = (entrada, alvo) => {
    const container = document.createElement('div');
    container.className = 'card'
    //const img = document.createElement('img');
    const title = document.createElement('h5');
    const subtitle = document.createElement('h4');

   // title.innerHTML = entrada.dataset.nome;
    //img.src = entrada.imagem;
    container.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,1) 16%, rgba(0,0,0,0.6474964985994398) 45%, rgba(0,0,0,0) 70%), url('${entrada.imagem}')`;
    title.innerHTML = entrada.nome 
    subtitle.innerHTML = entrada.posicao;

    //container.appendChild(img);
    container.appendChild(title);
    container.appendChild(subtitle);

    alvo.appendChild(container);
}
jogadores.forEach((e) => {
    if (e.elenco == 'feminino'){
    cria_cartao(e, cards_fem_div);
}
if (e.elenco == 'masculino'){
    cria_cartao(e, cards_mas_div);
}
})

