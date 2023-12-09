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
        html += `<img src=${data[i][0]} id= "img" width="400" height="400" class="center"><p></p>`;
      } else if (j === 1) {
        html += `<a onclick="parseStyle('${data[i][1]}')" href="#">${data[i][1]}</a><p></p>`
      } else if (j === 2) {
        html += `<a href="${data[i][5]}" target="_blank" id = "albumTitle">${data[i][2]}</a><p></p>`
      } else if (j === 3) {
        html += `<a onclick="parseStyle('${data[i][3]}')" href="#">${data[i][3]}</a><p></p>`      
      } else if (j === 5) {
        html += `<a onclick="parseStyle('${data[i][7]}')" id = "musicGenre" href="#">${data[i][7]}</a><p></p>`      
      } else if (j === 6) {
        html += `<a onclick="parseStyle('${data[i][8]}')" id = "musicStyle" href="#">${data[i][8]}</a><p></p>`
      } else if (j === 7) {
        html += `<a onclick="parseStyle('${data[i][9]}')" id = "musicStyle" href="#">${data[i][9]}</a>`
      } else if (j === 8) {
        html += `<p>${data[i][4]} (${data[i][17]})</p>`
      } else if (j === 9) {
        html += `<p id='bucket'>${data[i][6]}</p>`
      } else {
      }

    card.innerHTML = html;
    display.appendChild(card);
    }
  }
};
