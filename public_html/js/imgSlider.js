/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//clean cells from table2
var tabla2Celda1 = document.getElementById("t2c1");
var tabla2Celda2 = document.getElementById("t2c2");
var tabla2Celda3 = document.getElementById("t2c3");
var tabla2Celda4 = document.getElementById("t2c4");
tabla2Celda1.textContent="Image Slider - imgSlider.js";
tabla2Celda2.textContent="";
tabla2Celda3.textContent="";
tabla2Celda4.textContent="";

//creacion y asignacion de nuevos elementoss a la tabla
var leftButton = document.createElement("button");
var rightButton = document.createElement("button");
var imagen = document.createElement("img");
var pics = [
        "http://www.sololearn.com/uploads/slider/1.jpg", 
        "http://www.sololearn.com/uploads/slider/2.jpg", 
        "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
var c_pic=0;

leftButton.textContent="Anterior";
rightButton.textContent="Siguiente";
imagen.width=200;
imagen.height=100;
imagen.src=pics[c_pic];
leftButton.addEventListener("click",prevPic);
rightButton.addEventListener("click",nextPic);

tabla2Celda2.appendChild(leftButton);
tabla2Celda3.appendChild(rightButton);
tabla2Celda4.appendChild(imagen);


//funciones
function prevPic(){
    c_pic--;
    if (c_pic<0){
        c_pic=pics.length-1;
    }
    imagen.src=pics[c_pic];
}
function nextPic(){
    c_pic++;
    if (c_pic===pics.length){
        c_pic=0;
    }
    imagen.src=pics[c_pic];
}
