//JavaScript

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

var Vrms = firebase.database().ref().child('MedicionSolar/TensionRMS'); //Folder where the data is extracted
Vrms.on('value', snap => TakenTensionRMS.innerText = snap.val());

var Irms = firebase.database().ref().child('MedicionSolar/CorrienteRMS'); 
Irms.on('value', snap => TakenCorrienteRMS.innerText = snap.val());

var Energy = firebase.database().ref().child('MedicionSolar/Energia'); 
Energy.on('value', snap => TakenEnergia.innerText = snap.val());

var PowerFactor = firebase.database().ref().child('MedicionSolar/FactorPotencia'); 
PowerFactor.on('value', snap => TakenFactorPotencia.innerText = snap.val());

//var ApparentPower = firebase.database().ref().child('MedicionSolar/PotenciaAparente'); 
//ApparentPower.on('value', snap => TakenPotenciaAparente.innerText = snap.val());

var ActivetPower = firebase.database().ref().child('MedicionSolar/PotenciaActiva'); 
ActivetPower.on('value', snap => TakenPotenciaActiva.innerText = snap.val());
