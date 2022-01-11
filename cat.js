const idCat = document.getElementById('cat')
const divCat = document.createElement('div')
const imagemCat = document.createElement('img')

async function buscarImagemCat(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => imagemCat.src = data[0].url)
    divCat.appendChild(imagemCat)
}

function listarCats(){
    const lista = document.createElement('li')
    const botao = document.createElement('button')
    botao.innerText = 'Próximo Gatinho'
    idCat.appendChild(divCat)
    lista.appendChild(botao)
    idCat.appendChild(lista)
}


buscarImagemCat()
listarCats()

const atualizaImg = document.querySelector('#cat')
atualizaImg.addEventListener('click', novoURL)

function novoURL(evt) {
    if(evt.target.tagName == 'BUTTON'){
        buscarImagemCat()
    }
}
