const idDog = document.getElementById('dog')
const div = document.createElement('div')
const imagem = document.createElement('img')

async function buscarImagem(){
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => imagem.src = data[0].url)
    div.appendChild(imagem)
}

listarCard()
buscarImagem()

function listarCard(){
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = 'Próximo Dog'
    idDog.appendChild(div)
    li.appendChild(button)
    idDog.appendChild(li)

}

const atualizarImagem = document.querySelector('#dog')
atualizarImagem.addEventListener('click', mudarUrl)

function mudarUrl(evt){
    if(evt.target.tagName == 'BUTTON'){
    
        buscarImagem() 
    }
}

