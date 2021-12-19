// Memory match
let gameOver=false;
let cards = document.querySelectorAll(".card");
let flips = document.querySelectorAll(".flip");
let pairs = document.querySelectorAll(".paired");
let index;

//shuffling cards
function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
function restart(){
    insertFaces=[];
    insertClass=[];
    cardIndexes=[]
    n=-1
    //make all cards face down
    
    flips = document.querySelectorAll(".flip"); //get all flipped and paired cards 
    pairs = document.querySelectorAll(".paired");
    cards= document.querySelectorAll(".card");
    flips.forEach(flip => flip.classList.remove("flip"));  //remove their flipped and paired attributes
    pairs.forEach(pair => pair.classList.remove("paired"));
    
    setTimeout(function(){ //waiting to shuffle to prevent new faces..
                           //..from being displayed before the cards are flipped

        while (n < cards.length-1){
            n++;
            cardIndexes.push(n);
        }
        for (let card of cards){
            insertFaces.push(card.innerHTML);
            insertClass.push(card.className);
        }
        n=-1
        for (let i of shuffleArray(cardIndexes)){
            n++;
            cards[i].innerHTML=insertFaces[n];
            cards[i].className=insertClass[n];
        }
        cards.forEach(card => card.addEventListener("click", flip)); //return event listeners
    }, 250);
    
};
restart();




backs = document.querySelectorAll(".cardBack");
function flip(){
    flips=document.querySelectorAll(".flip");
    //count flipped cards
    flippedCount=flips.length;
    if (flippedCount<2){
        this.classList.toggle("flip");
    }
    if (flippedCount==2){
        flips.forEach(flip => flip.classList.toggle("flip"));
        this.classList.toggle("flip");
    }
    //checking if pair
    flips=document.querySelectorAll(".flip");
    if (flips.length==2){
        if (flips[0].classList[1] === flips[1].classList[1]){
            flips.forEach(pair => pair.classList.toggle("paired"));
            flips.forEach(pair => pair.removeEventListener("click", flip));
        }
    }
}
cards.forEach(card => card.addEventListener("click", flip));





