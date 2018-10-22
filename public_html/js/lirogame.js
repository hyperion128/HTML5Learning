/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var _weapon={_type,_damage,_skill};
//var _armor={_type,_defence,_skill};
//var _player={_hp:100,_mana:100,_weapon:"rock",_name:"Hagane"};
//var _monster={_hp:100,_mana:100,_weapon:"unarmed",_name:"Orc"};

//Variables
var player_turn=true;
var player_action=1;
//armas
var _mandoble = new arma("Mandoble",10,5,1);
var _espada = new arma("Short Sword",5,3,0.7);
//armaduras
var _cuero = new armadura("Cuero",3,3);
var _placas = new armadura("Placas",4,6);
//jugadores
var user=new player(100,100,_mandoble,_placas,"Hagane");
var orc=new player(10,0,_espada,_cuero,"Orcules");


// Ejecucion del Bisne
//duel(user,orc);
var arreglo=["uno","dos","tres"]; //Tambien se pueden ingresar funciones como elementos del array
var arreglo2=[1,2,3];
var obj_arreglo={uno:"uno",dos:"dos", tres:3};
var nuevo_array=arreglo.concat(arreglo2);
document.write(obj_arreglo.uno+"<br/>");
document.write("El área de un ciruclo de R=5 es: "+Math.PI*(Math.pow(5,2))+"<br/>");

var str0="123.456789";
var str1=str0.substr(1,6); //23.456 (index start --> index_start + lenght)
var str2=str0.substring(0,str0.indexOf(".")+3); //123.45 (index start --> index end)
document.write(str1+"<br/>");
document.write(str2+"<br/>");

//var playa = setInterval(showPlayerHP,3000);
//var playa2= setInterval(deductPlayerHP,1500);
//var deductphp=setInterval(deductPlayerHP,1001);
var playerHP_anim=setInterval(playerHP,1000);
var inienemyhp=orc.hp;
var enemyHP_anim=setInterval(enemyHP,1000);
var deductorchp=setInterval(deductOrcHP,1001);
var counter=0;
var a=0;
var tbl2 = document.getElementById("tabla2");
var tbl2_div_arr=tbl2.getElementsByTagName("div");

var ciclictt=setInterval(targettags,1000);

function targettags(){
    tbl2_div_arr[a].innerHTML=counter;
    if(counter%2===0){
        tbl2_div_arr[a].style.color="blue";
        
    }
    else{
        tbl2_div_arr[a].style.color="red";
    }
        counter++;
        a++;
    if (a===tbl2_div_arr.length){
        a=0;
    }
}


function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    
    var timer=document.getElementById("tiempo");
    timer.innerHTML=hours+":"+mins+":"+secs;
    
    //document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
function printTime12(){
    var d = new Date();
    if (d.getHours()>12){
        var hora=((d.getHours()-12)<10)?"0"+(d.getHours()-12):(d.getHours()-12);
    }
    else {
        var hora=(d.getHours()<10)? "0"+d.getHours():d.getHours() ;
    }
    var min=(d.getMinutes()<10)? "0"+d.getMinutes():d.getMinutes() ;
    var seg=(d.getSeconds()<10)? "0"+d.getSeconds():d.getSeconds() ;
    var mes=d.getMonth();
    var dia=d.getDate();
    //var dia=1;
    var meridiam=(d.getHours()>=12)?"pm":"am";
    var th=(dia===1)?"st":(dia===2)?"nd":(dia===3)?"rd":"th";
    switch(mes){
        case 0: mes="January"; break;
        case 1: mes="February"; break;
        case 2: mes="March"; break;
        case 3: mes="April"; break;
        case 4: mes="May"; break;
        case 5: mes="June"; break;
        case 6: mes="July"; break;
        case 7: mes="Auugust"; break;
        case 8: mes="September"; break;
        case 9:mes="October"; break;
        case 10:mes="November"; break;
        case 11:mes="December"; break;
    }
    var timer=document.getElementById("tiempo12");
    timer.innerHTML=mes+" "+dia+th+" "+d.getFullYear()+" - "+hora+":"+min+" "+meridiam;
}
var tiempo12=setInterval(printTime12,1000);

//contructores 
//Proto arma
function arma(tipo,dano,peso,velocidad){
    this.tipo=tipo;
    this.dano=dano;
    this.peso=peso;
    this.velocidad=velocidad;
    this.critico=isCritical;
}
function isCritical(){
    if((this.peso*this.velocidad)>0.5){
    this.critico=true;
        }
}
//Proto armadura
function armadura(tipo,defensa,peso){
    this.tipo=tipo;
    this.defensa=defensa;
    this.peso=peso;
}

//proto player
function player (hp, mana, arma, armadura, nombre){
    this.hp=hp;
    this.mana=mana;
    this.arma=arma;
    this.armadura=armadura;
    this.nombre=nombre;
    this.takedamage=function(dano,criticalhit){
        if(criticalhit){
            this.hp-=((dano*2)-this.armadura.defensa);
        }
        else{
        this.hp-=(dano-this.armadura.defensa);
    }
    };
    this.changeweapon=function(nuevaarma){
        this.arma=nuevaarma;
    };
    this.changearmor=function(nuevaarmadura){
        this.armadura=nuevaarmadura;
    };
}

//Funciones
function duel(user,orc){
    var usropt="";
    while (user.hp>0 && orc.hp>0 ){
        usropt=prompt("Duel is on nigga! \n your options are: \n 1.attack \n 2.run ");
    switch (usropt){
    case "1":
        orc.takedamage(user.arma.dano,user.arma.critico());
        alert(orc.nombre+" recibe daño.\n Aun tiene "+orc.hp+" HP" );
        break;
    case "2":
        
        break;
    case "3":
        
        break;
    }
    user.takedamage(orc.arma.dano,orc.arma.critico());
    alert(user.nombre+" recibe daño.\n Aun tiene "+user.hp+" HP" );
    }
    if(user.hp<=0){
        alert("You Died");
    }
    else{
        alert("You killed that nigga "+orc.nombre+"!! congrats, now Teabag him");
    }
}

//----------
function showPlayerHP(){
    document.write(user.nombre +" has "+ user.hp +" hitpoints left <br/>");
     if (user.hp<=0){
     clearInterval(playa2);
     clearInterval(playa);
 }

}
function deductPlayerHP(){
    user.hp-=25;
}
function deductOrcHP(){
    orc.hp-=1;
}


function playerHP(){
    var playerhpbar = document.getElementById("playerinfo");
    playerhpbar.innerHTML="HP <progress max=100 value="+user.hp+"></progress> "+user.hp;
    if (user.hp<=0){
        playerhpbar.innerHTML="HP <progress value=0></progress> DEAD";
        //clearInterval(deductphp);
        clearInterval(playerHP_anim);
    }
}

function enemyHP(){
    var enemyhpbar=document.getElementById("enemyinfo");
    enemyhpbar.innerHTML = "HP <progress max="+inienemyhp+" value="+orc.hp+"></progress> "+orc.hp;
    if (orc.hp<=0){
        enemyhpbar.innerHTML="HP <progress value=0></progress> DEAD";
        var aaaa=document.getElementById("ctable");
        var a=document.getElementById("go-btn");
        a.disabled=true;
        //aaaa.style.display = "none";
        clearInterval(enemyHP_anim);
        clarInterval(deductOrcHP);
        
    }
    

    
}