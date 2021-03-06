import Papa from "https://cdn.skypack.dev/papaparse@5.3.0";

// Clear Console
console.clear();

// Variable declarations
let data = undefined;
let display = document.getElementById("result-text");


  Papa.parse("./data/mzk.csv", {
    download: true,
    complete: function (result) {
    data = result.data;
    renderData(data);
      }
    });

function renderData(data) {

  for (let i = 1; i < data.length; i++) {
    let card = document.createElement("div");
    card.className = 'profile-card'
      let html = ''
    for (let j = 0; j < data[i].length; j++) {
      if (j === 0) {
        if (data[i][j] === '') return;
        html += `<img src=${data[i][0]} id= "img${i}" width="220" height="220" class="center">`;
      } else if (j === 1) {
        html += `<p id = "albumArtist">${data[i][1]}</p>`
      } else if (j === 2) {
        html += `<a href="${data[i][5]}" target="_blank" id = "albumTitle">${data[i][2]}</a>`
      } else if (j === 3) {
        html += `<p>${data[i][3]}  -   ${data[i][4]}</p>`
      } else if (j === 6) {
        html += `<p id='musicGenre'>Genre: ${data[i][6]}</p>`
      } else if (j === 7) {
        html += `<p id='musicStyle'>Style: ${data[i][7]} , ${data[i][8]}</p>`
      } else if (j === 17) {
        html += `<p id='decade'>${data[i][17]}</p>`
      } else {
      }

    card.innerHTML = html;
    display.appendChild(card);
    }
  }
}
