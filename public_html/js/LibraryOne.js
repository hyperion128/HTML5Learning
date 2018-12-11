/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const addExercise =(exId="myExerciseName",funtionName="myFunction",groupName="myTagName",parentNodeID="body")=>{ //agrega nuevo item al catalogo de ejercicios label input br
    let parent=document.getElementById(parentNodeID); // obteniendo nodo padre para despues agregar los elementos en el DOM
    
    let vLabel = document.createElement("label");
    vLabel.id=exId+"Label";
    vLabel.textContent=exId;
    vLabel.for=exId+"Radio";;
    
    let vRadio= document.createElement("input");
    vRadio.id=exId+"Radio";
    vRadio.type='radio';
    vRadio.name=groupName;
    
    vRadio.addEventListener('click',funtionName);
    let salto=document.createElement("br");
    
    parent.appendChild(vLabel);
    parent.appendChild(vRadio);
    parent.appendChild(salto);
}