/*
alert('funciona este escript??');*/
function Calificar() {
    var res=[];
    res[0] = document.getElementById("p1c").checked;
    res[1] = document.getElementById("p2b").checked;
    res[2] = document.getElementById("p3d").checked;
    res[3] = document.getElementById("p4b").checked;
    res[4] = document.getElementById("p5a").checked;
    res[5] = document.getElementById("p6b").checked;
    res[6] = document.getElementById('p7e').checked;
    res[7] = document.getElementById('p8d').checked;
    res[8] = document.getElementById('p9c').checked;
    res[9] = document.getElementById('p10b').checked;
    res[10] = document.getElementById('p11b').checked;
    res[11] = document.getElementById('p12d').checked;
    res[12] = document.getElementById('p13c').checked;
    res[13] = document.getElementById('p14a').checked;
    res[14] = document.getElementById('p15d').checked;
    res[15] = document.getElementById('p16d').checked;
    res[16] = document.getElementById('p17c').checked;
    /*r p17 = document.getElementById('no').value;*/
    res[17] = document.getElementById('p18d').checked;
    res[18] = document.getElementById('p19e').checked;
    res[19] = document.getElementById('p20c').checked;
    res[20] = document.getElementById('p21d').checked;
    res[21] = document.getElementById('p22b').checked;
    res[22] = document.getElementById('p23b').checked;
    res[23] = document.getElementById('p24b').checked;
    res[24] = document.getElementById('p25b').checked;
    res[25] = document.getElementById('p26a').checked;
    res[26] = document.getElementById('p27d').checked;
    res[27] = document.getElementById('p28d').checked;
    res[28] = document.getElementById('p29c').checked;
    res[29] = document.getElementById('p30a').checked;
    res[30] = document.getElementById('p31c').checked;
    res[31] = document.getElementById('p32b').checked;
    res[32] = document.getElementById('p33c').checked;
    res[33] = document.getElementById('p34c').checked;
    res[34] = document.getElementById('p35a').checked;
    res[35] = document.getElementById('p36b').checked;
    res[36] = document.getElementById('p37b').checked;
    res[37] = document.getElementById('p38c').checked;
    res[38] = document.getElementById('p39c').checked;
    res[39] = document.getElementById('p40a').checked;
    res[40] = document.getElementById('p41c').checked;
    res[41] = document.getElementById('p42a').checked;
    res[42] = document.getElementById('p43a').checked;
    res[43] = document.getElementById('p44e').checked;
    res[44] = document.getElementById('p45c').checked;
    res[45] = document.getElementById('p46c').checked;
    res[46] = document.getElementById('p47c').checked;
    res[47] = document.getElementById('p48e').checked;
    res[48] = document.getElementById('p49d').checked;
    res[49] = document.getElementById('p50a').checked;

    res[50] = document.getElementById('p51a').checked;
    res[51] = document.getElementById('p52a').checked;
    res[52] = document.getElementById('p53b').checked;
    res[53] = document.getElementById('p54b').checked;
    res[54] = document.getElementById('p55d').checked;
    res[55] = document.getElementById('p56b').checked;
    res[56] = document.getElementById('p57d').checked;
    res[57] = document.getElementById('p58c').checked;
    res[58] = document.getElementById('p59c').checked;
    res[59] = document.getElementById('p60a').checked;
    res[60] = document.getElementById('p61e').checked;
    res[61] = document.getElementById('p62d').checked;
    res[62] = document.getElementById('p63c').checked;
    res[63] = document.getElementById('p64a').checked;
    res[64] = document.getElementById('p65c').checked;
    res[65] = document.getElementById('p66a').checked;
    res[66] = document.getElementById('p67d').checked;
    res[67] = document.getElementById('p68d').checked;
    res[68] = document.getElementById('p69c').checked;
    res[69] = document.getElementById('p70b').checked;
    res[70] = document.getElementById('p71b').checked;
    res[71] = document.getElementById('p72c').checked;
    res[72] = document.getElementById('p73d').checked;
    res[73] = document.getElementById('p74c').checked;
    res[74] = document.getElementById('p75d').checked;
    /*var mal = 0;*/
    var correcto=0;
    var incorrecto=0;

    for(i=0;i<=75;i++){
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