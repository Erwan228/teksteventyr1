
//Model
let pages = [
    {description: 'Du møter på en bestemor, DIN bestemor, og hun står midt i veien. Hun vinker til deg.', choice1: 'Stoppe opp og si hei', choice1Chosen: 'Hun sier bare hei...Ikke en veldig meningsfull samtale...Du kjører videre.', choice2: 'Kjøre over henne (+10EXP & +100G)', choice2Chosen: 'Bestemor er ikke lenger. Du føler deg fæl og tom innvendig, men fyller tomrommet i sjelen din med EXP og penger. Du kjører fornøyd videre. ', choice2ChosenCont: 'Du ser deg tilbake <br> <img id="grandmaDead" src="/images/grandmaDead.png">', choice2ChosenGainCoin: true,},
    {description: 'En stor hvit kassebil kjører inn foran deg.', choice1: 'Ligge bak', choice1Chosen: 'Du bruker 5 timer ekstra på 50km enn du hadde forventet, før kassebilen kjører av. Du kjører videre.', choice2: 'Sladde forbi', choice2Chosen: 'Sjåføren av kassebilen synes du ser dritkul  ut mens du sladder forbi. Han vippser deg 100G. <br/>(Hvordan han fikk nummeret ditt kommer du aldri til å vite)Du kjører videre i "blissfull ignorance"', choice2ChosenGainCoin: true},
    {description: 'Langs veien ser du en teatergruppe sette opp Hamilton.', choice1: 'Se hva som skjer i rommet hvor det skjer', choice1Chosen: 'Du vet nå hva som skjedde. Du selger informasjonen til Meta for 100G', choice1ChosenGainCoin: true,  choice2: 'Si nei til dette', choice2Chosen: 'WOW! Du klarte å si nei til dette. Du kjører videre uten noen erfaringer fra denne fantastiske musikalen. <br/>Du ser deg tilbake med en tåre i øyet...og kræsjer nesten med et tre.'},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: '', choice1: '', choice1Chosen: '', choice2: '', choice2Chosen: ''},
    {description: 'Du merker at du snart må fylle på bensin. Du ser en bensinstasjon komme opp snart. <br/> Mistenksomt hvor beleilig det var. Du kjører inn dit.', choice1: 'Betal for bensin (-999999G)', choice1Chosen: 'Hvorfor betaler du for bensin? Har du ikke sett prisen? Etter én dråpe må du allerede selge bilen for å komme ut av gjelden det skaper.', choice2: '<img src="/images/FIGHT.png">', choice2Chosen: 'Du går opp til den andre personen på bensinstasjonen og stikker kniven din inn i brystet på dem. Personen dør umiddelbart. (+ 10EXP) <br/> Du selger offerets bil på FINN.NO og har nå nok til to dråper bensin og en saftig pølse. Du kjører videre.'},
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
     <br><br><br>
     <p>${page.choice2ChosenCont}</p>
 
     `
     if(choice2ChosenGainCoin){
         wallet += 100;
     }
 }
 
 
 
 //Controller
 
 
 
 
 
