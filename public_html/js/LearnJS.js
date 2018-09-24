/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//document.write("<span class='mexico'>Hello World, im an imported js file</span>");
//alert("This is an alert box");

var x=2;
var y=3;
var z=y/x;
var pi=3.141516;
stringvar="1+2*3";
document.write(eval(stringvar)+"<br/>");
document.write(10/"3"+"<br/>");
var x=1;
a=5;b=6;
a+=b*=2;
aa=1;bb="1";
user1="admin"; power="dios";
var chiquitona=19;
var calimbazo = (chiquitona>=18)?"Ya chingaste":"bote compa";
document.write("a is:"+a+" and b is: "+b+"<br/>");
var armas2manos =["Two Handed Sword","Battle Axe","War Mace"]; //esto es un array
var player = {arma:"Pointy Stick", armadura:"Leather Armor", hp:100, mana:100};// esto es un objeto
document.write(x+pi+"<br/>");
document.write("You chose: "+armas2manos[1]+"<br/>");
document.write("You are currently armed with: "+player.arma+"<br/>");
document.write((!(user1==="admin"||power==="meh"))+"<br/>");
document.write(calimbazo+"<br/>");
//this is a coment :)
/* these are
 * also comments
 * :)
 */

var toprint="x";
for (var initx=0;initx<10;initx++){
    document.write(toprint+"<br/>");
    toprint+="x";
}
//0 1 1 2 3 5 8 13
var fibo1=0;
var fibo2=1;
var fibo3=0;
while(fibo3<100){
    document.write(fibo3+" ");
    fibo3=fibo1+fibo2;
    fibo1=fibo2;fibo2=fibo3;
}
document.write("<br/>");
for (var i=1;i<=10; i++){
    if (i===5){
        continue;
    }
    document.write(i+" ");
}
document.write("<br/>");

for (var i=1;i<=5; i++){
    hacerladepedo("José",i,"extra");
}

for (var i=2;i<=5; i++){
    document.write("3 a la ",i," potencia es:"+pow(3,i)+"<br/>");
}


var powerful=pow(2,5);
document.write(powerful +"<br/>");

var resultado=0, valor1=0;
do{
    valor1=prompt("Ingresa numero a calcular su cuadrado");
    resultado=pow(valor1,2);
}
while (!confirm("Calcular cuadrado de "+valor1));
alert("El cuadrado de "+valor1+" es "+resultado);


alert("Hey niga... \n How are you?");
var nombre=null;
do{
    nombre=prompt("Hey Nigga, whats your name?","Type your name here nigga.");
}
while(nombre===null || nombre==="");

function hacerladepedo(pedero, pedos){
    document.write(pedero+" la esta haciendo de pedo "+pedos+" veces!!, plus "+arguments[2]+" <br/>");
}

function pow(x,y){
    var base=x;
    for(var i=2;i<=y;i++){
        x*=base;
    }
    return x;
}