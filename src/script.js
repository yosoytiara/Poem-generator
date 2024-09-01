function displayPoem(respons){
   new Typewriter("#poem", {
     strings: response.data.answer,
     autoStart: true,
     delay: 2,
     cursor: "",
   });
}


function generatePoem(event) {
  event.preventDefault();

  let apiKey = "d330a6b8bfatf4d382236a6o4df18fc6";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem";
  let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    // Calling the API
    axios.get(apiUrl).then(displayPoem);

 
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
