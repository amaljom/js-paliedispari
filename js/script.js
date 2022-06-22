// * FUNZIONE PER CAPIRE SE SI TRATTA DI UNA PALINDROMO O MENO
function analisiPalindromo(word){
    let condition=false;
    let lunghezza=word.length
    let i=0;
    while(i<word.length/2){
        if( word[i] === word[lunghezza - i -1] ){
            i++;
            condition=true;
        }
        else{
            i=word.length/2;
            condition=false;
        }
    }
    return condition;
} 
// ! HO CREATO UN CICLO CHE CONFRONTI LE DUE ESTREMITA' DELLA PAROLA
// ! IN QUESTO MODO LA FUNZIONA SI MUOVE DA SOLO DALLE DUE ESTREMITA' VERSO IL CENTRO


// ? CHIEDIAMO AL UTENTE DI INSERIRE UNA PAROLA IN MODO DA POTERCI POI EFFETTUARE LE ANALISI
const userWord= prompt('inserisci una parola!');

let esitoTest= analisiPalindromo(userWord);

if (esitoTest){
    console.log('è una parola palindroma');
}
else{
    console.log('ritenta!');
}

// * CREIAMO UNA FUNZIONA CHE GENERI AUTOMATICAMENTE UN NUMERO PER IL CALCOLATORE


function randomNum(){
    let randomNumber= (Math.floor(Math.random() * 6)+1);
    return randomNumber;
}

// * LO SOMMIAMO A QUELLO DEL UTENTE E VERIFICHIAMO SE SIA PARI O DISPARI
function evenOrNot(numero) {
    let even= 'dispari';
    if(numero % 2 == 0){
        even='pari';
    }
    return even;
}

// ? CHIEDIAMO AL UTENTE UN NUMERO TRA UNO E CINQUE
const userNumber= parseInt(prompt('Inserisci un numero tra 1 e 5'));
const userChoise= prompt(" scegli 'pari' o 'dispari' ");
console.log(userNumber, userChoise);

let randomNumberPC= randomNum();
console.log(randomNumberPC);

let sumNumbers = randomNumberPC + userNumber;
console.log(sumNumbers);

let result = evenOrNot(sumNumbers);
if (result === userChoise){
    console.log('Hai vinto, ci avevi preso');
}
else{
    console.log('hai perso non ci hai azzeccato!');
}