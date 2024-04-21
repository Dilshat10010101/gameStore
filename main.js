let color = ['#ffc0cb', '#ffb6c1', '#ffadc1', '#ffa3b8', '#ff99ae', '#ff90a4', '#ff869b', '#ff7c91', '#ff7287', '#ff687e',
    '#ff5e74', '#ff546a', '#ff4b60', '#ff4156', '#ff374d', '#ff2d43', '#ff2339', '#ff192f', '#ff0f26', '#ff051c', '#ff051c', '#ff0f26', '#ff192f', '#ff2339', '#ff2d43', '#ff374d', '#ff4156', '#ff4b60', '#ff546a', '#ff5e74',
    '#ff687e', '#ff7287', '#ff7c91', '#ff869b', '#ff90a4', '#ff99ae', '#ffa3b8', '#ffadc1', '#ffb6c1', '#ffc0cb'
];
let time = 0;
let elem;
let colorNummer = 0;
let paragraphs = document.querySelectorAll('#gameHolder p');
//skapar flera variabler eller bara diklarerar de för att använda senare.




function buttonChangeColor() { //Ändrar färg på webbsidans knappar funktion

    if (time == color.length) {
        time = 0; //om time är lika long som arrayen color då blir time 0 igen för att upprepa hela if satsen här under.
    }

    if (elem != '1') {
        elem.style.backgroundColor = color[time];//ändrar bakgrund på knapparna på vilken index den är på i arrayen color.
    }

    time++; //adderar med 1 så att vi går vidare till nästa färg i color arrayen.
}

function buttonWhite() {//knappen blir vit om det finns ingen pekare över den
    elem.style.backgroundColor = "#FFFFFF"
    elem = '';
}

setInterval(buttonChangeColor, 50)// ändrar färg varje 0.05 sekunder för att det ska skapa en soth in och ut effekt på knappen



function openDropDown() {//öppnar menyn i en dropdown när man klickar på menu ikonen på mobil version av webbsidan
    let dropdown = document.getElementById('dropDownId');
    if (dropdown.style.display == 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
}

function changeColor() {//ändrar färg på hela webbsidan i varje webbsidor med att get:A flera element genom id och ändra bakgrunds färg
    colorNummer = colorNummer + 1;
    if (colorNummer == 1) {
        document.getElementById('navbar').style.backgroundColor = "blue";
        document.getElementById('gamesCount').style.backgroundColor = "#2733FFFF";
        document.getElementById('holderShadow').style.backgroundColor = "#1580FFFF";
        document.getElementById('gameHolder').style.backgroundColor = "#57D1FFFF";
        document.getElementById('info').style.backgroundColor = "rgb(108, 196, 254)";
        paragraphs.forEach(paragraph => {
            paragraph.style.backgroundColor = "blue";
        });
        document.getElementById('holderShadow2').style.backgroundColor = "#1580FFFF";
        document.getElementById('gameHolder2').style.backgroundColor = "#57D1FFFF";
        paragraphs.forEach(paragraph => {
            paragraph.style.backgroundColor = "blue";
        });

    } else if (colorNummer == 2) {
        document.getElementById('navbar').style.backgroundColor = "green";
        document.getElementById('gamesCount').style.backgroundColor = "#458C3EFF"; 
        document.getElementById('holderShadow').style.backgroundColor = "#4B9843FF"; 
        document.getElementById('gameHolder').style.backgroundColor = "#7EFF71FF";
        document.getElementById('info').style.backgroundColor = "rgb(108, 254, 140)";
        paragraphs.forEach(paragraph => {
            paragraph.style.backgroundColor = "green";
        });
    } else {
        colorNummer = 0;
        document.getElementById('navbar').style.backgroundColor = "rgb(255, 0, 183)";
        document.getElementById('gamesCount').style.backgroundColor = "rgb(160, 0, 115)";
        document.getElementById('holderShadow').style.backgroundColor = "rgb(255, 0, 200)";
        document.getElementById('gameHolder').style.backgroundColor = "rgb(253, 127, 255)";
        document.getElementById('info').style.backgroundColor = "rgb(249, 108, 254)";
        paragraphs.forEach(paragraph => {
            paragraph.style.backgroundColor = "rgb(255, 0, 183)";
        });
    }
}