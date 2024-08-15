// Free Dictionary API : https://dictionaryapi.dev/
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// variables declaration
const jsResult = document.getElementById("result");
const audio = document.getElementById("sound");
const jsBtn = document.getElementById("search-btn");

//
jsBtn.addEventListener("click", () => {
    let input = document.getElementById("input-box").value;
    console.log(input);
    //using the fetch method to communicate with dictionary API and get a definition for our inputs
    fetch(`${url}${input}`)//request to get the word meaning from the dictionary api 
        .then((Response) => Response.json()) //if returning a value 
        .then((data) => {
            console.log(data);//checking if the output is correct
            //insertion of the input's definition into the HTML content.
            jsResult.innerHTML = `<div class="word">
                <h3>${input}</h3>
                <button onclick="playAudio()">
                <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="meaning">
            ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="example"> Example:
            ${data[0].meanings[0].definitions[0].example || "No example found"}
            </p>
            <p class="synonyms"> Synonyms:
            ${data[0].meanings[0].synonyms[0] || "No synonyms"}
            </p>
            <p class="antonyms"> Antonyms:
            ${data[0].meanings[0].antonyms[0] || "No antonyms" }
            </p>`;
            audio.setAttribute("src", `${data[0].phonetics[1].audio}`);
            console.log(audio);
        })
        //if the input is empty or not a noun (wrong input => error).
        .catch(() => {
            jsResult.innerHTML = `<h5 id ="error">Wrong input, try again!</h5>`;
        });

});

function playAudio() {
    audio.play();
}