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


//div para colocar pregunta
const divQ = document.createElement('div');
const btnNext = document.createElement('button');
//tag bold para pregunta
const bold = document.createElement('b');
const imgD = document.createElement('div');

const dets = document.createElement('details');
const sum = document.createElement('summary');
const olElement = document.createElement('ol');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const i = document.createElement('i');
const br314 = document.createElement('br');
const br315 = document.createElement('br');



body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Llegas a la biblioteca');

div.append(imgD);



//Colocar div donde se colocara texto
div.append(textDiv);
//Colocar texto dentro del div de texto
textDiv.append(text);



text.append('En efecto la bibliotecaria te espera en la biblioteca central a las 3:00 p.m. \
            Te pide un momento para poder imprimir desde su computadora apple la lista de \
            pistas que debes buscar. Al momento de darte la lista te indica que debes encontrar \
            la fecha y hora del viaje con las pistas. Pero lo primero que debes hacer es seleccionar \
            de la estanteria una de las revistas con portada de la ciudad a la que crees que iras".'); 


imgD.append(img);
img.setAttribute('src', '../../../images/general/librarian.jpeg');
img.setAttribute('width', '450px');

divQ.append(dets);
dets.append(sum);
sum.append('Pistas');
dets.append(olElement);
olElement.append(li1);
li1.append('La primera busqueda te llevará a la segunda pista.');
olElement.append(li2);
li2.append('¿A que se podrá referir la marca');
i.append('"apple"');
li2.append(i);
li2.append('de la computadora?');
li2.append(br314);
li2.append("* En el contexto del juego.");
divQ.append(br315);

//Pregunta
body.append(divQ);
divQ.append(bold);
divQ.append(btnNext);
btnNext.append("Siguiente");
btnNext.setAttribute('id', 'nextBtn');



document.getElementById("nextBtn").onclick = function () {
    location.href = "magsOptions.html";
};

divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');
textDiv.setAttribute('id', 'divText');
imgD.setAttribute('id', 'divImg');
text.setAttribute('id', 'text');
sum.setAttribute('id', 'summary');
li1.setAttribute('id', 'li');
li1.setAttribute('id', 'li2');




