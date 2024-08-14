const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const jsResult = document.getElementById("result");
const audio = document.getElementById("sound");

const jsBtn = document.getElementById("search-btn");

jsBtn.addEventListener("click", () => {
    let input = document.getElementById("input-box").value;
    console.log(input);
    fetch(`${url}${input}`)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
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
            <p class="example">
            ${data[0].meanings[0].definitions[0].example
                || "No Example"}
            </p>`;
            audio.setAttribute("src", `${data[0].phonetics[1].audio}`);
            console.log(audio);
        })
        .catch(() => {
            jsResult.innerHTML = `<h5 id ="error">The word you entred is not found, try again!</h5>`;
        });

});
function playAudio() {
    audio.play();
}