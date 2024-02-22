import {eldontes} from "./fuggveny.js";

//console.log(eldontes(5))

//var szam = 12; 

//console.log(szam);

function fv1(){
    var szam;
    szam+=2; //NaN
    console.log(szam); //12 -> undifined ez nem hiba üzenet, hanem egy java érték. Balra deklarát  változóhatóköre lehet globális vagy fájl szintű, vagy függvény szintű. var változó esetén is működik a aza deklarációkor úgy működik hogy a hatóköre tetén hoztuk volna létre, h deklarációkor nem adunk értéket akkor automatikusan az untified értéket kapja undifined ez nem hiba üzenet, hanem egy java érték. Lokális változó hatókörén kívül nem értelmezhető. Globálisból a lokálist nem érjük el, fordítva igaz.
    szam = 24; // lokális
    var szam2 = 34;
    console.log(szam2);
}

//fv1()
//console.log(szam2)
//console.log(szam);

let szam=12;

function fv2(){
    let szam2= 24;
    console.log(szam2); //megáll a program futása, hibaüzentet ír
    {
        let szam2 = 33;// let hetőköre blokk szintű. Letter dekrarált szám hatóköre, lehet fájl szintű, illetve lehet lokális de blobbb szintű, {} közötti rész
        console.log(szam2)
    }
    console.log(szam);
    console.log(szam2);
}

fv2()
console.log(szam)
//console.log(szam2)