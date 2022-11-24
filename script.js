
//Model
let pages = [
    {description: 'Du møter på en bestemor, DIN bestemor, og hun står midt i veien. Hun vinker til deg.', choice1: 'Stoppe opp og si hei', choice1Chosen: 'Hun sier bare hei...Ikke en veldig meningsfull samtale...Du kjører videre.', choice2: 'Kjøre over henne (+10EXP & +100G)', choice2Chosen: 'Bestemor er ikke lenger. Du føler deg fæl og tom innvendig, men fyller tomrommet i sjelen din med EXP og penger. Du kjører fornøyd videre.', choice2ChosenGainCoin: true,},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    
 ] ;
 let pageCounter = -1;
 let coolDude = []
 let coolBar = "";
 let youWin = "";
 let gameOver = "";
 let disabledWhenBroke = "disabled";
 let wallet = 0;
 
 //View
 
 mainView();
 
 function mainView(){
     document.getElementById('app').innerHTML = /*HTML*/ `
     
     <h1> TekstEventyr </h1>
 
     <p> Du skal ut på eventyr for å gjøre bilen din kulere </p>
     <button id="updateBtn" onclick="updateView()">Bånn gass!</button>
 
     //Får kulhetspoeng og pengene i lommeboka til bestemor når hun blir overkjørt,
     kan kjøpe kule ting til bilen for å uppe kulhetsfaktor. Knapp er disabled 
     når egen lommebok er tom
     
     <button id="pimpButton" ${disabledWhenBroke} onclick ="shopView()" > Pimp my ride </button>
     
     `;
 }
 
 function updateView(){
     pageCounter ++;
     const page = pages[pageCounter]
     document.getElementById('app').innerHTML = /*HTML*/ `
     <p>${page.description}<p>
         <button onclick="choice1Choose()">${page.choice1}</button>
         <button onclick="choice2Choose()">${page.choice2}</button>
     `
 }
 
 function choice1Choose(){
     const page = pages[pageCounter]
     document.getElementById('app').innerHTML = /*HTML*/ `
     <p>${page.choice1Chosen}</p>
     <button onclick="updateView()">Kjør videre</button>
     <a href="/shop.html" target="_blank" rel="noopener noreferrer">Pimp my ride</a>
     `
     if(choice1ChosenGainCoin){
         wallet += 100;
     }
 }
 
 function choice2Choose(){
     const page = pages[pageCounter]
     document.getElementById('app').innerHTML = /*HTML*/ `
     <p>${page.choice2Chosen}</p>
     <button onclick="updateView()">Kjør videre</button>
     <a href="/shop.html" target="_blank" rel="noopener noreferrer">Pimp my ride</a>
 
     `
     if(choice2ChosenGainCoin){
         wallet += 100;
     }
 }
 
 
 
 //Controller
 
 
 
 
 