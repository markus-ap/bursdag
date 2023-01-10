//const no = new Date("December 25, 2023 08:00");
const no = new Date("December 31, 2023, 08:00");
let år = 0;
if(no.getMonth() == 11){
    år = no.getFullYear() + 1;
}
else{
    år = no.getFullYear()
}

const måldato = new Date(`December 25, ${år} 08:50`);


let gjenverandeTid = måldato - no;

nedtelling();
setInterval(nedtelling, 1000);

function nedtelling(){    
    let måned = no.getMonth();
    let månedDagar = new Date(år, måned, 0).getDate();

    let dag = no.getDate();

    let månedarAtt = 11 - måned
    if(måned == 11){
        månedarAtt += 12;
    }

    let dagar = 0;
    if(dag == måldato.getDate()){
        dagar = 0;
    }
    else if(dag < måldato.getDate()){
        dagar = måldato.getDate() - dag;
    }
    else{
        månedarAtt -= 1;
        dagar = (månedDagar - dag) + (måldato.getDate());
    }

    const timar = Math.floor((gjenverandeTid % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutt = Math.floor((gjenverandeTid % (1000 * 60 * 60)) / (1000 * 60));
    const sekund = Math.floor((gjenverandeTid % (1000 * 60)) / 1000);

    skrivDato(datostreng(månedarAtt, dagar, timar, minutt, sekund));
}

function skrivDato(dato){
    document.getElementById("dagar").innerHTML = dato;
}

function datostreng(mån, dag, tim, min, sek){
    return "Det er " + mån + " månedar, " + dag + " dagar, " + tim + " timar, " + min + " minutt, "+ sek + " sekund att."
}