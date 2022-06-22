// * FUNZIONE PER CAPIRE SE SI TRATTA DI UNA PALINDROMO O MENO
function analisiPalindromo(word){
    let condition=false;
    let lunghezza=word.length
    let i=0;
    while(i<word.length/2){
        if( word[i] === word[lunghezza - i -1] ){
            i++;
            condition=true;
            console.log(word);
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

