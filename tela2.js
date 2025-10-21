
// Pega oque vem depois da ?
const id_url = new URLSearchParams (window.location.search);

// Pega so o valr recebido da id_url e do episodio
const vlr_id = id_url.get("id");
const vlr_episode = id_url.get("episode")
url_episodes = `https://rickandmortyapi.com/api/episode/${vlr_id}`


// Busca o personagem pelo ID
// async function getCharacter(vlr_id) {
//   const response = await fetch(`https://rickandmortyapi.com/api/character/${vlr_id}`);
//   const data = await response.json();
//   return data;
// }

// Busca o episodio do personagem
async function get_episode(url_episodes) {
  const response = await fetch(url_episodes)
  const data = await response.json()
  return data.episode 

}

async function get_episodes(url_episodes) {
  episodes = await get_episode(url_episodes)
  console.log(episodes)
}



async function showCharacter() {
  const character = await getCharacter(vlr_id);

  const container = document.getElementById("container");

  const box = document.createElement("div");
  box.classList.add("box");

  const gender = document.createElement("h2")
  gender.textContent ="Genero: " + character.gender;

  const origin = document.createElement("h2")
  origin.textContent = "Origem: " + character.origin.name

  const img = document.createElement("img");
  img.classList.add("img")
  img.src = character.image;

  const name = document.createElement("h1");
  name.textContent = "Nome: " + character.name;

  const specie = document.createElement("h2");
  specie.textContent = "Espécie: " + character.species;

  const status = document.createElement("h2");
  status.textContent = "Status: " + character.status;

  const type = document.createElement("h2");
  type.textContent = "Tipo: " + character.type;
  
  const location = document.createElement("h2");
  location.textContent = "Localizaçao: " + character.location;

  const episode = document.createElement("h2")
  episode.textContent = "Episodio(s): " + 

  box.appendChild(img);
  box.appendChild(name);
  box.appendChild(gender)
  box.appendChild(status);
  box.appendChild(specie);
  box.appendChild(origin)
  box.appendChild(location)
  box.appendChild(type)
  box.appendChild(episode)

  container.appendChild(box);
}

showCharacter();

back.addEventListener("click", function()  {
        window.location.href = "tela1.html"

    })