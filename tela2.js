

// Pega oque vem depois da ?
const id_url = new URLSearchParams (window.location.search);

const id = id_url.get("id");


// Busca o personagem pelo ID
async function getCharacter(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json();
  return data;
}

async function showCharacter() {
  const character = await getCharacter(id);

  const container = document.getElementById("container");

  const box = document.createElement("div");
  box.classList.add("char-box");

  const gender = document.createElement("h2")
  gender.textContent = character.gender;

  const img = document.createElement("img");
  img.src = character.image;

  const name = document.createElement("h1");
  name.textContent = character.name;

  const specie = document.createElement("h2");
  specie.textContent = "Espécie: " + character.species;

  const status = document.createElement("h2");
  status.textContent = "Status: " + character.status;

  box.appendChild(img);
  box.appendChild(name);
  box.appendChild(specie);
  box.appendChild(status);

  container.appendChild(box);
}

showCharacter();
