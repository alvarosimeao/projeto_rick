const url = `https://rickandmortyapi.com/api/character/${id}`



async function call_api(url) {
    const response = await fetch(url)
    console.log(response)
    if (response.status == 200) {
    const data = await response.json()
    const persons = await data.results
    return persons
    }
    
}

async function get_id() {
    persons.forEach(runner => {
        let id = runner.id
        console.log(runner.id)
    })    
}

async function card() {
    let persons = await call_api(url)
    
    const all_container = document.getElementById("all_container")
    persons.forEach(element => {
        console.log(element)
        const box = document.createElement("div")
        box.classList.add("box")

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

        all_container.appendChild(box)
        
    });
}


card()