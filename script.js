
// Funzione per verificare se una parola è palindroma
function verifyPalindrome(word) {

    // Rimuovo gli spazi e metto la parola in minuscolo
    word = word.replace(/\s/g, '').toLowerCase();
    
    // Inverto la parola e la confronto con l'originale
    let invertedWord = word.split('').reverse().join('');
    
    return word === invertedWord;
}

// Funzione principale per chiedere all'utente una parola e verificare se la parola è palindroma
function askWord() {

    // Chiedere all'utente di inserire una parola
    let usernameWord = prompt("Inserisci una parola per verificare se è un palindromo:");
    
    // Verificare se la parola è palindroma e mostrare il risultato
    if (verifyPalindrome(usernameWord)) {
        console.log("La parola è un palindromo!");
    } else {
        console.log("La parola non è un palindromo.");
    }
}

// Chiamare la funzione per chiedere la parola all'utente
askWord();


// Pari o dispari

    //l'utente sceglie pari o dispari
    let userChoice = prompt ('Scegli pari o dispari')

    // l'utente inserisce un numero da 1 a 5
    let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))

    // Funzione per generare un numero random per il computer (da 1 a 5) 
    function randomNumber (){
        let pcNumber = Math.floor(Math.random() * 5) +1;
    }
    // sommiamo i due numeri
    let sum = userNumber + pcNumber;

    //  Funzione per determinare se la somma dei due numeri è pari o dispari 
    function evenOdd(number){
        if(sum % 2=== 0){
            return 'pari'
        }
        else{
            return `dispari`
        }
    }

   
    
