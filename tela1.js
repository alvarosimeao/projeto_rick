url = "https://rickandmortyapi.com/api/character/?page=1"


async function call_api(url) {
    personagem = await fetch(url)
    data = await personagem.json()
    results = await data.results
    return data.results
}

call_api(url)

function card(persons) {
    const container = document.getElementById("all_container")
    results.forEach(element => {
        console.log(results)
        const cadastro = document.createElement("div")
        container.appendChild(cadastro)

        let img = document.createElement("img")
        img.src = element.results.image

        cadastro.appendChild(img)

    });
}