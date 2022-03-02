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


//div para colocar pregunta
const divQ = document.createElement('div');
const btnNext = document.createElement('button');
//tag bold para pregunta
const bold = document.createElement('b');
const imgD = document.createElement('div');



body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('¡Haz ganado!');


div.append(imgD);



//Colocar div donde se colocara texto
div.append(textDiv);
//Colocar texto dentro del div de texto
textDiv.append(text);



text.append('Tu llamada ha entrado a la radio y el locutor te dice: \
    "¡Felicidades! Haz sido uno de los 3 afortunados. Debes ir a la \
    bibliblioteca central mañana a las 3:00 p.m. cuando estes ahí la \
    bibliotecaria te dará un listado de cosas que debes buscar, resolver \
    y obtener, estas serán pistas para poder reclamar tu boleto en la \
    agencia de viajes"'); 



imgD.append(img);
img.setAttribute('src', '../../../images/general/IWoon.gif');
img.setAttribute('width', '245px');

//Pregunta
body.append(divQ);
divQ.append(bold);
divQ.append(btnNext);
btnNext.append("Siguiente");
btnNext.setAttribute('id', 'nextBtn');


document.getElementById("nextBtn").onclick = function () {
    location.href = "goToLibrary.html";
};


divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');
textDiv.setAttribute('id', 'divText');
imgD.setAttribute('id', 'divImg');
text.setAttribute('id', 'text');

