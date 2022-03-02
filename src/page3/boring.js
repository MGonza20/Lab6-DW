//Colocar body
const body = document.body;

//Hacer un div para colocar elementos
const div = document.createElement('div');


//Crear elemento para img
const img = document.createElement('img');

//create break
const br = document.createElement('br');



//div para colocar pregunta
const divQ = document.createElement('div');
const btnTrip = document.createElement('button');
const btnNo = document.createElement('button');
const imgD = document.createElement('div');

body.append(div);


div.append(imgD);
imgD.append(img);
img.setAttribute('src', 'https://media.giphy.com/media/ehJ4vNWRhinhMMvLxp/giphy.gif');
img.setAttribute('width', '500px');


//Pregunta
body.append(divQ);
divQ.append(br);
divQ.append(btnTrip);
btnTrip.append("Back");
btnTrip.setAttribute('id', 'backBtn');


document.getElementById("backBtn").onclick = function () {
    location.href = "index.html";
};


