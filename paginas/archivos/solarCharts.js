//JavaScript 

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var kwh = []  
    var hora = [] 
    var dia = []  
    var mes = []  

    firebase.database().ref('HistoricoSolar').limitToLast(2929).once('value').then((snapshot) => {
        list = snapshot.val();
        for (const [key, value] of Object.entries(list)) {
            for (const [atributo, value2] of Object.entries(value)) {
                if (atributo == "kwh") {
                    kwh.push(value2)
                }
                if (atributo == "hora") {
                    hora.push(value2)
                }
                if (atributo == "dia") {
                    dia.push(value2)
                }
                if (atributo == "mes") {
                    mes.push(value2)
                }
            }
        }

        //Agrupaciones por mes
        //Sep y Nov tienen 30 dias - Oct y Dic tiene 31

        var kwhSep = []; var kwhSepMes = 0; var kwhSepDias = []; var kwhSepHoras = []; //720, 1 valor, 30 valores , 24 val x dia 
        var diaSep = []; var diaSepMes = []; var diaSepDias = []; var diaSepHoras = [];
        var horaSep = []; var horaSepMes = []; var horaSepDias = []; var horaSepHoras = [];
        var mesSep = []; var mesSepMes = []; var mesSepDias = []; var mesSepHoras = [];

        var kwhOct = []; var kwhOctMes = 0; var kwhOctDias = []; var kwhOctHoras = []; //744, 1 valor, 30 valores , 24 val x dia 
        var diaOct = []; var diaOctMes = []; var diaOctDias = []; var diaOctHoras = [];
        var horaOct = []; var horaOctMes = []; var horaOctDias = []; var horaOctHoras = [];
        var mesOct = []; var mesOctMes = []; var mesOctDias = []; var mesOctHoras = [];

        var kwhNov = []; var kwhNovMes = 0; var kwhNovDias = []; var kwhNovHoras = []; //720, 1 valor, 30 valores , 24 val x dia 
        var diaNov = []; var diaNovMes = []; var diaNovDias = []; var diaNovHoras = [];
        var horaNov = []; var horaNovMes = []; var horaNovDias = []; var horaNovHoras = [];
        var mesNov = []; var mesNovMes = []; var mesNovDias = []; var mesNovHoras = [];

        var kwhDic = []; var kwhDicMes = 0; var kwhDicDias = []; var kwhDicHoras = []; //744, 1 valor, 30 valores , 24 val x dia 
        var diaDic = []; var diaDicMes = []; var diaDicDias = []; var diaDicHoras = [];
        var horaDic = []; var horaDicMes = []; var horaDicDias = []; var horaDicHoras = [];
        var mesDic = []; var mesDicMes = []; var mesDicDias = []; var mesDicHoras = [];

        for (var x = 0; x <= 719; x++) {
            kwhSep[x] = kwh[x]
            horaSep[x] = hora[x]
            diaSep[x] = dia[x]
            mesSep[x] = mes[x]

            kwhNov[x] = kwh[x + 1464]
            horaNov[x] = hora[x + 1464]
            diaNov[x] = dia[x + 1464]
            mesNov[x] = mes[x + 1464]
        }
        for (var x = 0; x <= 743; x++) {
            kwhOct[x] = kwh[x + 720]
            horaOct[x] = hora[x + 720]
            diaOct[x] = dia[x + 720]
            mesOct[x] = mes[x + 720]

            kwhDic[x] = kwh[x + 2184]
            horaDic[x] = hora[x + 2184]
            diaDic[x] = dia[x + 2184]
            mesDic[x] = mes[x + 2184]
        }
        for (var m = 0; m <= 719; m++) {
            kwhSepMes += kwhSep[m]
            kwhNovMes += kwhNov[m]
        }
        for (var m = 0; m <= 743; m++) {
            kwhOctMes += kwhOct[m]
            kwhDicMes += kwhDic[m]
        }
        for (var d = 0; d <= 29; d++) {
            var sumakwhSepDia = 0;
            var sumakwhNovDia = 0;
            for (h = 0; h <= 23; h++) {
                sumakwhSepDia += kwhSep[(d * 24) + h]
                sumakwhNovDia += kwhNov[(d * 24) + h]
            }
            kwhSepDias[d] = sumakwhSepDia
            kwhNovDias[d] = sumakwhNovDia

        }
        for (var d = 0; d <= 30; d++) {
            var sumakwhOctDia = 0;
            var sumakwhDicDia = 0;
            for (h = 0; h <= 23; h++) {
                sumakwhOctDia += kwhOct[(d * 24) + h]
                sumakwhDicDia += kwhDic[(d * 24) + h]
            }
            kwhOctDias[d] = sumakwhOctDia
            kwhDicDias[d] = sumakwhDicDia
            console.log("Dia: ", d + 1, "Consumo OCT: ", kwhOctDias[d], "Consumo DIC: ", kwhDicDias[d])
        }

        /*------------------------------------*/
        
        //Medicion: Ultimas 24 Horas  
        // const fecha = new Date();
        // var hoy = fecha.getDate();
        // var mesActual = fecha.getMonth() + 1;  

        /*TESTEO POR FECHAS*/
        var hoy = 1
        var mesActual = 9
        
        /*------------------------------------*/

        if (mesActual == 9) {
            var kwhSepHoy = kwhSep.slice(((hoy - 1) * 24), (((hoy - 1) * 24) + 24)) //Tomo solo 24 horas de info
            for (var h = 0; h <= 23; h++) {
                console.log("Dia:", hoy, "Hora:", h, "Medicion: ", kwhSepHoy[h])
            }
        }
        if (mesActual == 10) {
            var kwhOctHoy = kwhOct.slice(((hoy - 1) * 24), (((hoy - 1) * 24) + 24))
            for (var h = 0; h <= 23; h++) {
                console.log("Dia:", hoy, "Hora:", h, "Medicion: ", kwhOctHoy[h])
            }
        }
        if (mesActual == 11) {
            var kwhNovHoy = kwhNov.slice(((hoy - 1) * 24), (((hoy - 1) * 24) + 24))
            for (var h = 0; h <= 23; h++) {
                console.log("Dia:", hoy, "Hora:", h, "Medicion: ", kwhNovHoy[h])
            }
        }
        if (mesActual == 12) {
            var kwhDicHoy = kwhDic.slice(((hoy - 1) * 24), (((hoy - 1) * 24) + 24))
            for (var h = 0; h <= 23; h++) {
                console.log("Dia:", hoy, "Hora:", h, "Medicion: ", kwhDicHoy[h])
            }
        }

//-----------------Grafico 12 MESES------------

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time of Day');
        data.addColumn('number', 'kWh');

        //data.addRows([[new Date(2021, 6, i+1), kwh_x_dia[i]]]);
        data.addRows([[new Date(2021, 0), 0]]);
        data.addRows([[new Date(2021, 1), 0]]);
        data.addRows([[new Date(2021, 2), 0]]);
        data.addRows([[new Date(2021, 3), 0]]);
        data.addRows([[new Date(2021, 4), 0]]);
        data.addRows([[new Date(2021, 5), 0]]);
        data.addRows([[new Date(2021, 6), 0]]);
        data.addRows([[new Date(2021, 7), 0]]);
        data.addRows([[new Date(2021, 8), kwhSepMes]]);
        data.addRows([[new Date(2021, 9), kwhOctMes]]);
        data.addRows([[new Date(2021, 10), kwhNovMes]]);
        data.addRows([[new Date(2021, 11), kwhDicMes]]);

        var options = {
            //title: 'Total últimos 12 meses - ' + parseFloat((kwhSepMes+kwhOctMes+kwhNovMes+kwhDicMes)).toFixed(2).toString() + ' kWh',
            //title: 'Energia consumida en el año',
            legend: 'none',
            hAxis: {
                format: 'M/yy',
                gridlines: { count: 12 }
            },
            vAxis: {
                //title: 'KWH',
                minValue: 0
            }
        };

        document.getElementById('valueAnual').innerHTML = "Total último año: " + parseFloat((kwhSepMes+kwhOctMes+kwhNovMes+kwhDicMes)).toFixed(2).toString() + " kWh";

        var chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div_anual'));

        chart.draw(data, options);

//-----------------Grafico 1 MES / 30 dias------------

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time of Day');
        data.addColumn('number', 'kWh');

        var kwhMes = 0;

        if (mesActual == 9) {
            for (var d = 1; d <= 30; d++) {
                data.addRows([[new Date(2021, mesActual - 1, d), kwhSepDias[d - 1]]]);
            }
            kwhMes = kwhSepMes;
        }
        if (mesActual == 10) {
            for (var d = 1; d <= 31; d++) {
                data.addRows([[new Date(2021, mesActual - 1, d), kwhOctDias[d - 1]]]);
            }
            kwhMes = kwhOctMes;
        }
        if (mesActual == 11) {
            for (var d = 1; d <= 30; d++) {
                data.addRows([[new Date(2021, mesActual - 1, d), kwhNovDias[d - 1]]]);
            }
            kwhMes = kwhNovMes;
        }
        if (mesActual == 12) {
            for (var d = 1; d <= 31; d++) {
                data.addRows([[new Date(2021, mesActual - 1, d), kwhDicDias[d - 1]]]);
            }   
            kwhMes = kwhDicMes;
        }

        var options = {
            //title: 'Total últimos 30 dias - ' + parseFloat(kwhDicMes).toFixed(2).toString() + ' kWh',
            //title: 'Energia consumida en el mes',
            legend: 'none',
            hAxis: {
                format: 'd/M',
                gridlines: { count: 30 }
            },
            vAxis: {
                //title: 'KWH',
                minValue: 0
            }
        };
        
        document.getElementById('valueMensual').innerHTML = "Total último mes: " + parseFloat((kwhMes)).toFixed(2).toString() + " kWh";
        
        var chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div_mensual'));

        chart.draw(data, options);

//-----------------Grafico 1 dia / 24 horas------------

        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Time of Day');
        data.addColumn('number', 'kWh');
        
        var kwhHoy = 0.0;

        if(mesActual == 9)  {
            kwhHoy = 0.0;
            for (var h = 0; h <= 23; h++) {
                data.addRows([[{ v: [h, 0, 0], f: (h + ':00') }, kwhSepHoy[h]],]);
                kwhHoy += kwhSepHoy[h]
            }
        }
        if(mesActual == 10)  {
            kwhHoy = 0.0;
            for (var h = 0; h <= 23; h++) {
                data.addRows([[{ v: [h, 0, 0], f: (h + ':00') }, kwhOctHoy[h]],]);
                kwhHoy += kwhOctHoy[h]    
            }
        }
        if(mesActual == 11)  {
            kwhHoy = 0.0;
            for (var h = 0; h <= 23; h++) {
                data.addRows([[{ v: [h, 0, 0], f: (h + ':00') }, kwhNovHoy[h]],]);
                kwhHoy += kwhNovHoy[h]
            }
        }
        if(mesActual == 12)  {
            kwhHoy = 0.0;
            for (var h = 0; h <= 23; h++) {
                data.addRows([[{ v: [h, 0, 0], f: (h + ':00') }, kwhDicHoy[h]],]);
                kwhHoy += kwhDicHoy[h]
            }    
        }

        var options = {
            //title: 'Total últimas 24 horas - ' + parseFloat(kwhHoy).toFixed(2).toString() + ' kWh',
            //title: 'Energia consumida en las ultimas 24hs - ',
            legend: 'none', 
            hAxis: {
                //title: 'Hora del dia',
                format: 'H:mm',
                gridlines: { count: 24 },
                viewWindow: {
                    min: [0, 0, 0],
                    max: [23, 0, 0]
                }
            },
            vAxis: {
                //title: 'KWH'
            }
        };

        document.getElementById('valueDiario').innerHTML = "Total último día: " + parseFloat((kwhHoy)).toFixed(2).toString() + " kWh";

        var chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div_diario'));

        chart.draw(data, options);
    });
}