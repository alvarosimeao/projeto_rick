let cont = 1

let url = `https://rickandmortyapi.com/api/character/`




async function call_api(url) {
    document.getElementById("all_container").innerHTML = ''
    const response = await fetch(url)
    
    if (response.status == 200) {
        const data = await response.json()
        const persons = await data.results
        return persons
    }
    
}


async function card() {
    let persons = await call_api(url)
    
    const all_container = document.getElementById("all_container")
    persons.forEach(element => {
        
        const box = document.createElement("div")
        box.classList.add("box")
        
        let id = document.createElement("h2")
        id.textContent = "ID:" + element.id
        
        let name = document.createElement("h1")
        name.textContent = element.name 
        
        let img = document.createElement("img")
        img.classList.add("img")
        img.src = element.image
        
        let specie = document.createElement("h2")
        specie.textContent = element.species
        
        box.appendChild(img)
        box.appendChild(name)
        box.appendChild(specie)
        box.appendChild(id)
        
        box.addEventListener("click", function()  {
            window.location.href = `tela2.html?id=${element.id}`
            
        })
        
        
        all_container.appendChild(box)
        
    });
}

card()

// Botao de pular e voltar pagina

async function page_next() {
  cont++;
  url = `https://rickandmortyapi.com/api/character/?page=${cont}`;
  await card();
}
async function page_last() {
  cont--;
  url = `https://rickandmortyapi.com/api/character/?page=${cont}`;
  await card();
}


//linkar a funcao nos butoes 

document.getElementById("next_page").addEventListener("click", page_next);
document.getElementById("last_page").addEventListener("click", page_last);


//Extrair o nome no input

async function search_by_name() {
    const input_name = document.getElementById("search")
    const str_input = input_name.value.trim().toLowerCase();
    let url_input = `${url}?name=${str_input}`

    url = `https://rickandmortyapi.com/api/character/?name=${str_input}`;
    await card();
    input_name.value = ""

}

document.getElementById("button").addEventListener("click", search_by_name )

