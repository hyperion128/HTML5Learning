/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var _weapon={_type,_damage,_skill};
//var _armor={_type,_defence,_skill};
//var _player={_hp:100,_mana:100,_weapon:"rock",_name:"Hagane"};
//var _monster={_hp:100,_mana:100,_weapon:"unarmed",_name:"Orc"};
var player_turn=true;
var player_action=1;

//declarando armas
var _mandoble = new arma("Mandoble",10,5,1);
var _espada = new arma("Short Sword",5,3,0.7);

//declarando armaduras
var _cuero = new armadura("Cuero",3,3);
var _placas = new armadura("Placas",4,6);

//declaracion de jugadores
var user=new player(100,100,_mandoble,_placas,"Hagane");
var orc=new player(10,0,_espada,_cuero,"Orcules");


duel(user,orc);

//alert("El Daño del "+_mandoble["tipo"]+" es de: "+_mandoble.dano);

//contructor del prototipo arma
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
//contructor del prototipo armadura
function armadura(tipo,defensa,peso){
    this.tipo=tipo;
    this.defensa=defensa;
    this.peso=peso;
}

//constructor del prototipo player
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