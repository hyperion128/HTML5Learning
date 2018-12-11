/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    var inputa=document.createElement("input");
    inputa.id="input_a";
    var inputb=document.createElement("input");
    inputb.id="input_b";

    var boton_a=document.createElement("button");
    boton_a.textContent='Boton A';
    boton_a.addEventListener("click",print_something);
    let div_botona=document.getElementById("botona");
    div_botona.appendChild(inputa);
    div_botona.appendChild(inputb);
    
    div_botona.appendChild(boton_a);
    

    var resulta=document.createElement("label");
    resulta.textContent="El Resultado es...";
    resulta.id='resultaid';

    div_botona.appendChild(resulta);
    
    var myseccion=document.getElementById("botona").parentNode;
    var divloops=document.createElement("div");
    var label1=document.createElement("label");
    label1.id="output1";
    label1.textContent='output goes here';
    
    var btn1=document.createElement("button");
    btn1.textContent='FOR IN';
    btn1.addEventListener("click",forin);
    var btn2=document.createElement("button");
    btn2.textContent='FOR OF';
    btn2.addEventListener('click',forof);
    
    divloops.appendChild(btn1);
    divloops.appendChild(btn2);
    divloops.appendChild(label1);
    myseccion.appendChild(divloops);
    //Funct

    function print_something(){
        let a=parseInt(document.getElementById('input_a').value);
        let b=parseInt(document.getElementById('input_b').value);
        let disresulta=document.getElementById('resultaid');
        disresulta.textContent=` El Resultado de ${a} + ${b} es ${a+b}`;
    }
    
    const print_something2=(a=0,b=-1)=>{
        return a+b;
    }
    console.log(`el output de print_something2 es ${print_something2()}`);
    console.log(print_something2(1,2));
    console.log(print_something2);
    
    function forin(){
        let sword={id:1,name:"masterSword",weight:10};
        for (let i in sword){
            alert(`param ${i} is ${sword[i]}`);
        }
    }
    function forof(){
        let weapons_list=["Sword","Mace","BattleAxe"];
        for (let v of weapons_list){
            alert(v);
        }
    }