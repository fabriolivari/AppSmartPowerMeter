//JavaScript

//Tomar valores instantaneos de la base de datos

/*Variable donde se guarda el valor - Elemento del HTML que lo va a mostrar*/
//var takenValue = document.getElementById('takenValue');
//var dbRef = firebase.database().ref().child('DatoPrueba/takenValue'); //Folder where the data is extracted
//dbRef.on('value', snap => takenValue.innerText = snap.val()); //Resumen: Estructura basica getData
/*---------------------------------------------------------------------------------------------------------*/

var TakenTensionRMS = document.getElementById('TensionRMS');
var TakenCorrienteRMS = document.getElementById('CorrienteRMS');
var TakenEnergia = document.getElementById('Energia');
var TakenFactorPotencia = document.getElementById('FactorPotencia');
//var TakenPotenciaAparente = document.getElementById('PotenciaAparente');
var TakenPotenciaActiva = document.getElementById('PotenciaActiva');

//MedicionPrincipal

var Vrms = firebase.database().ref().child('MedicionPrincipal/TensionRMS'); //Folder where the data is extracted
Vrms.on('value', snap => TakenTensionRMS.innerText = snap.val());

var Irms = firebase.database().ref().child('MedicionPrincipal/CorrienteRMS'); 
Irms.on('value', snap => TakenCorrienteRMS.innerText = snap.val());

var Energy = firebase.database().ref().child('MedicionPrincipal/Energia'); 
Energy.on('value', snap => TakenEnergia.innerText = snap.val());

var PowerFactor = firebase.database().ref().child('MedicionPrincipal/FactorPotencia'); 
PowerFactor.on('value', snap => TakenFactorPotencia.innerText = snap.val());

//var ApparentPower = firebase.database().ref().child('MedicionPrincipal/PotenciaAparente'); 
//ApparentPower.on('value', snap => TakenPotenciaAparente.innerText = snap.val());

var ActivetPower = firebase.database().ref().child('MedicionPrincipal/PotenciaActiva'); 
ActivetPower.on('value', snap => TakenPotenciaActiva.innerText = snap.val());
