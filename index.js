// require("dotenv").config();
//console.log(process.env.API_KEY);
// const API_KEY =

// Print out value of API key stored in .env file

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=dogs&limit=25&offset=0&rating=g&lang=en`;

const imgCont = document.querySelector("#image-container");
const textInput = document.querySelector("#text-input");
const button = document.querySelector("#button");

// fetch insert gif to html

// async function getImage(query) {
//   const result = await fetch(endpoint);
//   const content = await result.json();
//   const gif = content.data[0].images.downsized.url;
//   const title = content.data[0].title;
//   imgCont.innerHTML = `<img src="${gif}" alt="${title}"></img>`;
// }
// getImage();

button.addEventListener("click", async () => {
  try {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${textInput.value}&limit=25&offset=0&rating=g&lang=en`
    );

    if (!result.ok) throw new Error(`${response.status}`);

    const content = await result.json();
    const randomGif =
      content.data[Math.floor(Math.random() * content.data.length)];
    const gif = randomGif.images.downsized.url;
    const title = randomGif.title;
    imgCont.innerHTML = `<img src="${gif}" alt="${title}"></img>`;
  } catch (err) {
    renderError(`Something went wrong: ${err.message}`);
  }
});

const renderError = (msg) => {
  imgCont.innerHTML = `<p>${msg}</p>`;
};
