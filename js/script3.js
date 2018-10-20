/*
alert('funciona este escript??');*/
function Calificar() {
    var res=[];
    res[0] = document.getElementById("p1c").checked;
    res[1] = document.getElementById("p2c").checked;
    res[2] = document.getElementById("p3d").checked;
    res[3] = document.getElementById("p4c").checked;
    res[4] = document.getElementById("p5e").checked;
    res[5] = document.getElementById("p6c").checked;
    res[6] = document.getElementById('p7b').checked;
    res[7] = document.getElementById('p8a').checked;
    res[8] = document.getElementById('p9b').checked;
    res[9] = document.getElementById('p10d').checked;
    res[10] = document.getElementById('p11d').checked;
    res[11] = document.getElementById('p12e').checked;
    res[12] = document.getElementById('p13c').checked;
    res[13] = document.getElementById('p14d').checked;
    res[14] = document.getElementById('p15c').checked;
    res[15] = document.getElementById('p16b').checked;
    res[16] = document.getElementById('p17c').checked;
    /*r p17 = document.getElementById('no').value;*/
    res[17] = document.getElementById('p18b').checked;
    res[18] = document.getElementById('p19d').checked;
    res[19] = document.getElementById('p20c').checked;
    res[20] = document.getElementById('p21b').checked;
    res[21] = document.getElementById('p22c').checked;
    res[22] = document.getElementById('p23c').checked;
    res[23] = document.getElementById('p24d').checked;
    res[24] = document.getElementById('p25b').checked;
    res[25] = document.getElementById('p26c').checked;
    res[26] = document.getElementById('p27b').checked;
    res[27] = document.getElementById('p28c').checked;
    res[28] = document.getElementById('p29a').checked;
    res[29] = document.getElementById('p30d').checked;
    res[30] = document.getElementById('p31c').checked;
    res[31] = document.getElementById('p32e').checked;
    res[32] = document.getElementById('p33d').checked;
    res[33] = document.getElementById('p34c').checked;
    res[34] = document.getElementById('p35a').checked;
    res[35] = document.getElementById('p36c').checked;
    res[36] = document.getElementById('p37b').checked;
    res[37] = document.getElementById('p38b').checked;
    res[38] = document.getElementById('p39a').checked;
    res[39] = document.getElementById('p40a').checked;
    res[40] = document.getElementById('p41b').checked;
    res[41] = document.getElementById('p42c').checked;
    res[42] = document.getElementById('p43a').checked;
    res[43] = document.getElementById('p44a').checked;
    res[44] = document.getElementById('p45b').checked;
    res[45] = document.getElementById('p46b').checked;
    res[46] = document.getElementById('p47d').checked;
    res[47] = document.getElementById('p48c').checked;
    res[48] = document.getElementById('p49e').checked;
    res[49] = document.getElementById('p50c').checked;
    res[50] = document.getElementById('p51a').checked;
    res[51] = document.getElementById('p52c').checked;
    res[52] = document.getElementById('p53d').checked;
    res[53] = document.getElementById('p54a').checked;
    res[54] = document.getElementById('p55b').checked;
    res[55] = document.getElementById('p56c').checked;
    res[56] = document.getElementById('p57e').checked;
    res[57] = document.getElementById('p58e').checked;
    res[58] = document.getElementById('p59d').checked;
    res[59] = document.getElementById('p60e').checked;
    res[60] = document.getElementById('p61c').checked;
    res[61] = document.getElementById('p62b').checked;
    res[62] = document.getElementById('p63b').checked;
    res[63] = document.getElementById('p64c').checked;
    res[64] = document.getElementById('p65d').checked;
    res[65] = document.getElementById('p66b').checked;
    res[66] = document.getElementById('p67e').checked;
    res[67] = document.getElementById('p68c').checked;
    res[68] = document.getElementById('p69b').checked;
    res[69] = document.getElementById('p70a').checked;
    res[70] = document.getElementById('p71c').checked;
    res[71] = document.getElementById('p72c').checked;
    res[72] = document.getElementById('p73b').checked;
    res[73] = document.getElementById('p74a').checked;
    res[74] = document.getElementById('p75d').checked;
    res[75] = document.getElementById('p76b').checked;
    res[76] = document.getElementById('p77b').checked;
    res[77] = document.getElementById('p78c').checked;
    res[78] = document.getElementById('p79e').checked;
    res[79] = document.getElementById('p80e').checked;
    /*var mal = 0;*/
    var correcto=0;
    var incorrecto=0;

    for(i=0;i<=79;i++){
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