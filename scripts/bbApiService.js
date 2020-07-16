function getCharacters() {
  const section = document.querySelector(".characters");
  const article = document.createElement("article");
  fetch(`https://breakingbadapi.com/api/characters?category=Breaking+Bad`)
    .then((response) => response.json())

    .then((data) => {
      
      article.innerHTML = data
        .map(
          (data) =>
            ` <img class="images" src="${data.img}" alt="${data.name}"/>
        <h4>Nickname: ${data.nickname}</h3>
        <h4>Name: ${data.name}</h3>
        <h4>Occupation: ${data.occupation}</h3>
        <h4>Appearance: ${data.appearance}</h3>
        <h4>Portrayed: ${data.portrayed}</h3>
        `
        )
        .join("");
    });

  section.appendChild(article);
}


getCharacters();
