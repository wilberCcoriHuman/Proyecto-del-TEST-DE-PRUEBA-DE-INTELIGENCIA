/*
alert('funciona este escript??');*/
function Calificar() {
    var res=[];
    res[0] = document.getElementById("p1d").checked;
    res[1] = document.getElementById("p2b").checked;
    res[2] = document.getElementById("p3c").checked;
    res[3] = document.getElementById("p4b").checked;
    res[5] = document.getElementById("p5d").checked;
    res[6] = document.getElementById('p6a').checked;
    res[7] = document.getElementById('p7c').checked;
    res[8] = document.getElementById('p8e').checked;
    res[9] = document.getElementById('p9a').checked;
    res[10] = document.getElementById('p10d').checked;
    res[11] = document.getElementById('p11b').checked;
    res[12] = document.getElementById('p12c').checked;
    res[13] = document.getElementById('p13a').checked;
    res[14] = document.getElementById('p14b').checked;
    res[15] = document.getElementById('p15a').checked;
    res[16] = document.getElementById('p16b').checked;
    /*r p17 = document.getElementById('no').value;*/
    res[17] = document.getElementById('p18b').checked;
    res[18] = document.getElementById('p20c').checked;
    res[19] = document.getElementById('p20a').checked;
    res[20] = document.getElementById('p21a').checked;
    res[21] = document.getElementById('p22c').checked;
    res[22] = document.getElementById('p23b').checked;
    res[23] = document.getElementById('p24b').checked;
    res[24] = document.getElementById('p25c').checked;
    res[25] = document.getElementById('p26a').checked;
    res[26] = document.getElementById('p27e').checked;
    res[27] = document.getElementById('p28c').checked;
    res[28] = document.getElementById('p29c').checked;
    res[29] = document.getElementById('p30b').checked;
    res[30] = document.getElementById('p31e').checked;
    res[31] = document.getElementById('p32a').checked;
    res[32] = document.getElementById('p33c').checked;
    res[33] = document.getElementById('p34e').checked;
    res[34] = document.getElementById('p35d').checked;
    res[35] = document.getElementById('p36a').checked;
    res[36] = document.getElementById('p37a').checked;
    res[37] = document.getElementById('p38e').checked;
    res[38] = document.getElementById('p39b').checked;
    res[39] = document.getElementById('p40a').checked;
    res[40] = document.getElementById('p41a').checked;
    res[41] = document.getElementById('p42c').checked;
    res[42] = document.getElementById('p43d').checked;
    res[43] = document.getElementById('p44b').checked;
    res[44] = document.getElementById('p45b').checked;
    res[45] = document.getElementById('p46b').checked;
    res[46] = document.getElementById('p47c').checked;
    res[47] = document.getElementById('p48a').checked;
    res[48] = document.getElementById('p49d').checked;
    res[49] = document.getElementById('p50a').checked;
    /*var mal = 0;*/
    var correcto=0;
    var incorrecto=0;

    for(i=0;i<=49;i++){
        if (res[i]==true){
            correcto = correcto + 1;
        }else {
            incorrecto = incorrecto + 1;
        }
        //alert(res[i]  +  " " + correcto);
    }
    alert('las respuestas correctas son '+ correcto +'  e incorrctas '+ incorrecto );
    
}
function Cancelar() {

    document.getElementById("formulario").reset();
}