setInterval(nedtelling, 1000);

window.onload = function(){
    nedtelling();
}

function settTid(){
    no = new Date();
    år = 0;
    
    if(no.getMonth() == 11 && no.getDate() > 25){
        år = no.getFullYear() + 1;
    }
    else{
        år = no.getFullYear()
    }
    
    måldato = new Date(`December 25, ${år} 08:50`);
    gjenverandeTid = måldato - no;
}


function nedtelling(){    
    settTid();

    let måned = no.getMonth();
    let månedDagar = new Date(år, måned, 0).getDate();

    let dag = no.getDate();

    let månedarAtt = 11 - måned
    if(måned == 11){
        if(dag <= 25) månedarAtt = 0;
        else månedarAtt += 12;
    }

    let dagar = 0;
    if(måned == 11 && dag == 25) {
        månedarAtt = 0;
    }
    else if(dag < måldato.getDate()){
        dagar = måldato.getDate() - dag;
    }
    else{
        dagar = (månedDagar - dag) + (måldato.getDate());
        månedarAtt -= 1;
    }

    const timar = Math.floor((gjenverandeTid % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutt = Math.floor((gjenverandeTid % (1000 * 60 * 60)) / (1000 * 60));
    const sekund = Math.floor((gjenverandeTid % (1000 * 60)) / 1000);

    datostreng(månedarAtt, dagar, timar, minutt, sekund);
}

function datostreng(mån, dag, tim, min, sek){
    var res = "";
    if(mån != 0) res += mån + " månedar, "
    if(dag != 0) res += dag + " dagar, " 


    res += tim + " timar, " + min + " minutt, og "+ sek + " sekund"

    var årElement = document.getElementById("år");
    var årVerdi = (år-1) - 1991;
    var årStreng = (mån == 0 && dag == 0) ? `🥳 ${årVerdi+1} 🥳`   : årVerdi ;
    årElement.innerHTML = årStreng;

    document.getElementById("dagar").innerHTML = res;
}