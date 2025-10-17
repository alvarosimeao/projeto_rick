const url = "https://rickandmortyapi.com/api/character/?page=1"


async function call_api(url) {
    const response = await fetch(url)
    console.log(response)
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
        console.log(element)
        const box = document.createElement("div")
        box.classList.add("box")
        
        let id = element.id

        let name = document.createElement("h2")
        name.textContent = element.name

        let img = document.createElement("img")
        img.classList.add("img")
        img.src = element.image

        let specie = document.createElement("h3")
        specie.textContent = element.species

        box.appendChild(img)
        box.appendChild(name)
        box.appendChild(specie)
        
         
        box.addEventListener("click", function()  {
        window.location.href = "tela2.html"
    })


        all_container.appendChild(box)
        
    });
}


card()
