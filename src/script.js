function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d330a6b8bfatf4d382236a6o4df18fc6";
  let context =
    "You are a romantic Poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Do not add html in the context";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // Calling the API
  axios.get(apiUrl).then(displayPoem);

  // Unhide poem block
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  poemElement.innerHTML = `<div class = "generating"> Generating a poem about ${instructionsInput.value} </div>`;
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
