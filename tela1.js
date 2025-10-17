const url = "https://rickandmortyapi.com/api/character/?page=1"


async function call_api(url) {
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
