/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var label1=document.getElementById("label1");
label1.textContent="Add a new Cell";
var sdl=document.createElement("span");
sdl.innerHTML="</br>";

document.getElementById("kbza").className+=" fadein";


var killarr=document.getElementById("actionarea");
var asd=killarr.childNodes;
var tamano=asd.length;
while (asd.length>4){
        asd[4].parentNode.removeChild(asd[4]);
}

killarr.appendChild(sdl);

var radio2=document.createElement("input");
radio2.type="radio"; radio2.name="actions";radio2.id="action2";
killarr.appendChild(radio2);
var label2=document.createElement("span").appendChild(document.createTextNode(" Delete last Cell"));
killarr.appendChild(label2);

document.getElementById("action2").onclick=selected_b;
document.getElementById("action1").onclick=selected_a;

document.getElementById("go-btn").onclick = dale;
var option=1;
function  selected_b(){
option=2;
}
function  selected_a(){
option=1;
}

function dale(){
    if (option===1){
        addNewCell();
    }
    else if (option===2) removeLastCell();
    
}

function addNewCell(){
  var tbl_1=document.getElementById("tabla2");
  var qwe=document.createElement("tr");
  var wer=document.createElement("td");
  var ert=document.createTextNode("This is a new Cell");
  wer.appendChild(ert);
  wer.colspan=2;
  qwe.appendChild(wer);
  tbl_1.appendChild(qwe);
}
function removeLastCell(){
    var tbl_1=document.getElementById("tabla2");
    tbl_1.removeChild(tbl_1.lastChild);
    
}
//document.getElementById("go-btn").onmouseover = annoy;
document.getElementById("go-btn").addEventListener("click",annoy);
var c=0;
var inipox=0;
function annoy(){
 var btn1= document.getElementById("go-btn");
 btn1.style.position="absolute";
 btn1.parentNode.style.position="relative";
 btn1.value="Fallaste x "+c;
 c++;
 if (inipox<1000){
     inipox+=100;
 }
 else {
     inipox-=100
 }
 
 btn1.style.left=inipox+"px";
 document.getElementById("go-btn").removeEventListener("click",annoy);
}