import {eldontes} from "./fuggveny.js";

//console.log(eldontes(5))

//var szam = 12; 

//console.log(szam);

function fv1(){
    var szam;
    szam+=2; //NaN
    console.log(szam); //12 -> undifined ez nem hiba üzenet, hanem egy java érték. Var-ra deklarát  változóhatóköre lehet globális vagy fájl szintű, vagy függvény szintű. var változó esetén is működik a aza deklarációkor úgy működik hogy a hatóköre tetén hoztuk volna létre, h deklarációkor nem adunk értéket akkor automatikusan az untified értéket kapja undifined ez nem hiba üzenet, hanem egy java érték. Lokális változó hatókörén kívül nem értelmezhető. Globálisból a lokálist nem érjük el, fordítva igaz.
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
        let szam2 = 33;// let hetőköre blokk szintű. Let-el dekrarált szám hatóköre, lehet fájl szintű, illetve lehet lokális de blobbb szintű, {} közötti rész
        console.log(szam2)
    }
    console.log(szam);
    console.log(szam2);
}

//fv2()
//console.log(szam)
//console.log(szam2)

for (let index = 0; index <3; index++){
    console.log(index)

}

//console.log(index) // hibaüzenet

const NEV= "Béla"; // constans értéke később nem változtatható meg. és már deklarásokor kötelző étéket adni. blokk szintű lokális szintű.
//nev="Jenő"


//lista és tömb = azonos tipsú, minden egyes elemnek van egy indexe
//lista =dinamikusan megvátoz

let lista = ["első","második", "harmadik"]

console.log(lista)
console.log(lista[2])
console.log("A lista hossza:"+lista.length)

lista[10]= "tizenegyedik"
console.log(lista)
console.log(lista[5])

lista.push("következő elem")//lista végére beteszi az adott elemet
console.log(lista)
lista.pop() // eltávolítja
console.log(lista)

lista=['a','b','c']
console.log(lista)

const lista2 = [11,12,13,14]
//lista2 = [23,24,25]


lista2[0]=11111111
lista2.push(222222222)
console.log(lista2) // cons lista esetén a lista a memóriában eltárolt hely fix, nem változtatható meg a memória címe, viszon az értékei megváltoztathatók, értéket adhatunk hozzá, vagy elvátávolíthatjuk az összes elemet, a lista címe fix.


// név telefonszám kor
const SZEMELY1 = {
    nev:"Gabi",
    tel:"12345",
    kor:12}

console.log(SZEMELY1.nev)
SZEMELY1.barat=true
console.log(SZEMELY1) // java sript objektum egy olyan öszzetet   ami össze tartozó adatoka kezel egybe, kulcs értékű ada tokból áll, a kulcsok jelentik ...az érték meg a hozzájuk tarózó értékeket, {} között vannak 