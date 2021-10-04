//Javascript 

function enableMeter(pagina)
{
    //console.log('asdsadasd')
    //document.getElementById("boton").innerText = "C A R G A N D O" //Agregar un id al boton, para hacer el login de carga
    firebase.database().ref("PanelDeControl/EnableMeter").set(1).then(() => {
        window.location = pagina
    });
    return true; 
}


