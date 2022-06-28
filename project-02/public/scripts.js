const ul = document.querySelector('tbody')
const input = document.querySelector('input')
const form = document.querySelector('form')

const lista = document.getElementById("urls")

const button = document.getElementById("botao_excluir")
let contador = 1

function addElement({ name, url }) {
    var campo = document.getElementById("texto")
    var item = document.createElement("tr")
    var item1 = document.createElement("td")
    var item2 = document.createElement("td")
    var item3 = document.createElement("td")
    var item4 = document.createElement("button")
    item4.setAttribute("id", "botao_excluir")
    item4.setAttribute("value", contador)
    item4.setAttribute("onclick", "removeElement("+contador+")")
    item.setAttribute("id", contador)
    //item4.setAttribute("type", "button")
    //item4.setAttribute("value", "Excluir")

    item1.innerHTML = name
    item2.innerHTML = url
    item4.innerHTML = "Excluir"
    item3.appendChild(item4)

    item.appendChild(item1)
    item.appendChild(item2)
    item.appendChild(item3)

    lista.appendChild(item)
    contador++
}

function removeElement(id) {
    //console.log(element.typeOf())
    console.log(id);
    const element = document.getElementById(id)
    element.remove();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url) 
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) 
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })

    input.value = ''
})