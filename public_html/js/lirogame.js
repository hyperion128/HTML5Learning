/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var _weapon={_type,_damage,_skill};
//var _armor={_type,_defence,_skill};
var _player={_hp:100,_mana:100,_weapon:"rock",_name:"Hagane"};
var _monster={_hp:100,_mana:100,_weapon:"unarmed",_name:"Orc"};
var player_turn=true;
var player_action=1;

/*
if(_player._hp<=0){
    alert("you died boi!!");
}
else if(_player._hp<11){
    alert("the clown is about to lift you");
}
else{
    alert("keep on wacking that monster boy");
}

(_monster._hp>0)?alert("Monster still rocking"):alert("You kicked the monsters arse good");
*/

switch(player_action){
    case 1:
        document.write(_player._name+" attacks "+_monster._name+" with: "+_player._weapon+"<br/>");
        break;
    case 2:
        document.write(_player._name+" flees the battle.");
        break;
    case 3:
        document.write(_player._name+" uses magic to attack "+_monster._name);
        _player._mana-=10;
        break;
    default:
        document.write(_player._name+" loses his time, duh..");
}

var toprint="x";
for (var initx=0;initx<10;initx++){
    document.write(toprint+"<br/>");
    toprint+="x";
}
//0 1 1 2 3 5 8 13
var fibo=0;
var counter=1;
while(fibo<100){
    document.write(fibo+" ");
    fibo+=counter;
    counter=fibo;
}