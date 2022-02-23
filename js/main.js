/*  
    Il programma dovrà mostrare una form (a piacere) da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.27 € al km)
    va applicato uno sconto del 17% per i minorenni
    va applicato uno sconto del 33% per gli over 65.
    L'output del prezzo finale va visualizzato con massimo due decimali, per indicare centesimi sul prezzo.
    In questo caso richiederà un minimo di ricerca l'uso della select.
*/

// Vado a leggere lo stato del button
const userButton = document.getElementById('btn-success');

// Richiamo una funzione anonima quando clicco sul button di invio
userButton.addEventListener('click', function(){
    
    // In queste variabili vado ad immagazzinare i dati degli input form
    let userNamePassenger = document.getElementById('name-passenger');
    let numberKilometres = document.getElementById('number-km');
    let etaPassenger = document.getElementById('eta-passenger');

    // Costante costo al km
    const priceKm = 0.27;
    // Calcolo costo del biglietto
    let priceTicket = priceKm * numberKilometres.value;

    let message = "";

    // Se minorenne applico uno sconto del 17% e mostro il risultato con solo 2 cifre decimali
    if (etaPassenger == "minorenne")
    {
        priceTicket -= priceTicket * 0.17; 
        priceTicket = priceTicket.toFixed(2); // Converto il numero con sole 2 cifre decimali
        message = `${userNamePassenger.value}, con i suoi ${etaPassenger.value} anni è minorenne, ha diritto ad uno sconto del 17%. Pagherà in totale ${priceTicket}€, per ${numberKilometres}.`;
    } 

    // Altrimenti se over 65, applico uno sconto del 33% e mostro il risultato con solo 2 cifre decimali
    else if (etaPassenger == "over65"){
        priceTicket -= priceTicket * 0.33;
        priceTicket = priceTicket.toFixed(2);
        message = `${userNamePassenger.value}, con i suoi ${etaPassenger.value} anni è un Over 65, ha diritto ad uno sconto del 40%. Pagherà in totale ${priceTicket}€, per ${numberKilometres}.`;
    } 

    // Visualizzo in console
    console.log(message);

    // Visualizzo nel body
    document.getElementById('user-name').innerHTML = userNamePassenger.value;
    document.getElementById('offer').innerHTML = "Biglietto Standard";
    document.getElementById('carrozza').innerHTML = "5";
    document.getElementById('cod').innerHTML = "92911";
    document.getElementById('price').innerHTML = priceTicket.value;

    // Resetto gli input
    userNamePassenger.value = "";
    numberKilometres.value = "";
});