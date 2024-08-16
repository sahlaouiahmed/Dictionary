// Free Dictionary API : https://dictionaryapi.dev/
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
// variables declaration
const jsResult = document.getElementById("result");
const audio = document.getElementById("sound");
const jsBtn = document.getElementById("search-btn");

jsBtn.addEventListener("click", () => {
    let input = document.getElementById("input-box").value;
    console.log(input);
    //using the fetch method to communicate with dictionary API and get a definition for our inputs
    fetch(`${url}${input}`) 
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);//checking if the output is correct
            //insertion of the input's definition into the HTML content.
            let keys = Object.keys(data[0].meanings);
            console.log(keys.length);
            if (keys.length == 2) {
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
                ${data[0].meanings[0].synonyms || ""}
                </p>
                <p class="antonyms"> Antonyms:
                ${data[0].meanings[0].antonyms || ""}
                </p>
                <br>
                <br>
                <p class = "second-meaning"> Second meaning : </p>
                <div class="word">
                    <h3>${input}</h3>
                <button onclick="playAudio()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
                </div>
                <div class="details">
                <p>${data[0].meanings[1].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
                </div>
                <p class="meaning">
                ${data[0].meanings[1].definitions[0].definition}
                </p>
                <p class="example"> Example:
                ${data[0].meanings[1].definitions[0].example || "No example found"}
                </p>
                <p class="synonyms"> Synonyms:
                ${data[0].meanings[1].synonyms || ""}
                </p>
                <p class="antonyms"> Antonyms:
                ${data[0].meanings[1].antonyms || ""}
                </p>`;
            }

            if (keys.length == 1) {
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
                ${data[0].meanings[0].synonyms || ""}
                </p>
                <p class="antonyms"> Antonyms:
                ${data[0].meanings[0].antonyms || ""}
                </p>`;

            }
            if (keys.length == 3) {
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
                ${data[0].meanings[0].synonyms || ""}
                </p>
                <p class="antonyms"> Antonyms:
                ${data[0].meanings[0].antonyms || ""}
                </p>
                <br>
                <br>
                <p class = "second-meaning"> Second meaning : </p>
                <div class="word">
                    <h3>${input}</h3>
                <button onclick="playAudio()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
                </div>
                <div class="details">
                <p>${data[0].meanings[1].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
                </div>
                <p class="meaning">
                ${data[0].meanings[1].definitions[0].definition}
                </p>
                <p class="example"> Example:
                ${data[0].meanings[1].definitions[0].example || "No example found"}
                </p>
                <p class="synonyms"> Synonyms:
                ${data[0].meanings[1].synonyms || ""}
                </p>
                <p class="antonyms"> Antonyms:
                ${data[0].meanings[1].antonyms || ""}
                </p>
                <br>
                <br>
                <p class = "third-meaning"> Third meaning : </p>
                <div class="word">
                    <h3>${input}</h3>
                <button onclick="playAudio()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
                </div>
                <div class="details">
                <p>${data[0].meanings[2].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
                </div>
                <p class="meaning">
                ${data[0].meanings[2].definitions[0].definition}
                </p>
                <p class="example"> Example:
                ${data[0].meanings[2].definitions[0].example || "No example found"}
                </p>
                <p class="synonyms"> Synonyms:
                ${data[0].meanings[2].synonyms || ""}
                </p>
                <p class="antonyms"> Antonyms:
                ${data[0].meanings[2].antonyms || ""}
                </p>`; 
            }
            audio.setAttribute("src", `${data[0].phonetics[1].audio}`);
            console.log(audio);
        })
        //if the input is empty or not a noun (wrong input => error).
        .catch(() => {
            jsResult.innerHTML = `<h5 id ="error">The word you entred is not found, try again!</h5>`;
        });

});


function playAudio() {
    audio.play();
}

