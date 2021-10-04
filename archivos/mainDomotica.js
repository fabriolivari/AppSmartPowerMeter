//JavaScript

//Domotica: Control de reles

//Lectura de Base de datos

var Rele1 = document.getElementById("stateRele1"); 
var Rele2 = document.getElementById("stateRele2");

var estadoRele1; //0 apagado - 1 prendido
var estadoRele2; //0 apagado - 1 prendido

firebase.database().ref('Domotica/StateRele1').on('value',(snapRele1)=>{
    if(snapRele1.val() == 0) { Rele1.innerText = "OFF"; estadoRele1 = 0; }
    if(snapRele1.val() == 1) { Rele1.innerText = "ON"; estadoRele1 = 1; } 
    else if (snapRele1.val() != 1 && snapRele1.val() != 0) { Rele1.innerText = "ERROR"; }
});

firebase.database().ref('Domotica/StateRele2').on('value',(snapRele2)=>{
    if(snapRele2.val() == 0) { Rele2.innerText = "OFF"; estadoRele2 = 0; }
    if(snapRele2.val() == 1) { Rele2.innerText = "ON"; estadoRele2 = 1 } 
    else if (snapRele2.val() != 1 && snapRele2.val() != 0) { Rele2.innerText = "ERROR"; }
});


/*Escritura de datos en la base de datos y Botones*/

function switchRele(numeroRele){
    if(numeroRele == 1)
    {
        firebase.database().ref("Domotica/StateRele1").set(!estadoRele1);    
    }
    if(numeroRele == 2)
    {
        firebase.database().ref("Domotica/StateRele2").set(!estadoRele2);    
    }
    return true; 
}

//firebase.database().ref("Domotica/StateRele1").set(0); //0 Apagado - 1 Prendido
//firebase.database().ref("Domotica/StateRele2").set(0); //0 Apagado - 1 Prendido

