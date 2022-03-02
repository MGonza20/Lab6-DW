//Colocar body
const body = document.body;

//Hacer un div para colocar elementos
const div = document.createElement('div');

const divTitle = document.createElement('div');

//Crear elemento para colocar titulo
const title = document.createElement('h1');

//Crear elemento para subtitulo 
const subtitle = document.createElement('h2');

//Crear elemento para img
const img = document.createElement('img');

//Crear elemento para colocar texto
const text = document.createElement('p');
//Div para texto
const textDiv = document.createElement('div');

//create break
const br = document.createElement('br');
const br2 = document.createElement('br');

//texto para subtitulo de pregunta
const subQuestion = document.createElement('h2');

//div para colocar pregunta
const divQ = document.createElement('div');
const btnTime1 = document.createElement('button');
const btnTime2 = document.createElement('button');
const btnTime3 = document.createElement('button');
//tag bold para pregunta
const bold = document.createElement('b');
const imgD = document.createElement('div');

const anchBooks = document.createElement('a');

body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Tercera búsqueda. Encuentra la hora');


div.append(imgD);


imgD.append(img);
img.setAttribute('src', '../../../images/general/tiktok.gif');

//Colocar div donde se colocara texto
div.append(textDiv);
//Colocar texto dentro del div de texto
textDiv.append(text);

text.append('Debes buscar estos libros y ver si en cuentras alguna pista en alguno de ellos.');

anchBooks.append('Ver libros');
anchBooks.setAttribute('href', '../page9/seeBooks.html');
text.append(anchBooks);


//Pregunta
body.append(divQ);
divQ.append(bold);
divQ.append(br);
divQ.append(btnTime1);
btnTime1.append("8:00");
divQ.append(br);
divQ.append(btnTime2);
btnTime2.append("12:00");
divQ.append(br2);
divQ.append(btnTime3);
btnTime3.append("9:00");
bold.append(subQuestion);
subQuestion.append('¿Cuál es la respuesta?');
btnTime1.setAttribute('id', 'time1Btn');
btnTime2.setAttribute('id', 'time2Btn');
btnTime3.setAttribute('id', 'time3Btn');


document.getElementById("time1Btn").onclick = function () {
    location.href = "../page8/nope2.html";
};

document.getElementById("time2Btn").onclick = function () {
    location.href = "../page11/done.html";
};

document.getElementById("time3Btn").onclick = function () {
    location.href = "../page8/nope2.html";
};

divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');
imgD.setAttribute('id', 'divImg');
text.setAttribute('id', 'text');