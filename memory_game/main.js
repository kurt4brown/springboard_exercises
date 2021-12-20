// Memory match

//establishing necessary variables
let gameOver=false;
let cards = document.querySelectorAll(".card");
let flips = document.querySelectorAll(".flip");
let pairs = document.querySelectorAll(".paired");
let index;

//defining the general shuffle function to be applied later
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
//defining the restart function
function restart(){
    insertFaces=[];
    insertClass=[];
    cardIndexes=[]
    
    //make all cards face down
    
    flips = document.querySelectorAll(".flip"); //get all flipped and paired cards 
    pairs = document.querySelectorAll(".paired");
    cards= document.querySelectorAll(".card");
    cards.forEach(card => card.removeEventListener("click", flip)); //removing the ability to flip cards while shuffling
    flips.forEach(flip => flip.classList.remove("flip"));  //remove their flipped and paired attributes
    pairs.forEach(pair => pair.classList.remove("paired"));
    
    
    n=-1
    setTimeout(function(){ //waiting to shuffle to prevent new faces from being...
                           //...displayed before card flip animation completes

        while (n < cards.length-1){  //making a list of all possible indexes
            n++;
            cardIndexes.push(n);
        }
        for (let card of cards){
            insertFaces.push(card.innerHTML);  //copying html data and class data into lists in original order
            insertClass.push(card.className);
        }
        n=-1
        for (let i of shuffleArray(cardIndexes)){  //pasting data in order into random indexes
            n++;
            cards[i].innerHTML=insertFaces[n];
            cards[i].className=insertClass[n];
        }
        flips.forEach(flip => flip.classList.remove("flip"));  //remove their flipped and paired attributes
        cards.forEach(card => card.addEventListener("click", flip)); //replacing or initializing here because given outside allows user to flip cards during shuffle causing bugs
    }, 1010); //setting the duration to longer than the time for a card to flip
    
};
restart();



//defining flip function
function flip(){
    flips=document.querySelectorAll(".flip");  //selecting all currently flipped cards 
    //count flipped cards
    flippedCount=flips.length;             //counting the number of flipped
    if (flippedCount<2){
        this.classList.toggle("flip");      //if less than two cards are flipped, flip the clicked card without problem
    }
    if (flippedCount==2){
        flips.forEach(flip => flip.classList.toggle("flip"));  //if two cards are flipped, unflip them, then flip the new card
        this.classList.toggle("flip");                         //no need for a timeout since the animation time to flip and unflip is the same, as it's on .card
    }
    //checking if pair
    flips=document.querySelectorAll(".flip");            //counting the number of flipped cards at each click
    if (flips.length==2){
        if (flips[0].classList[1] === flips[1].classList[1]){
            flips.forEach(pair => pair.classList.toggle("paired"));
            flips.forEach(pair => pair.removeEventListener("click", flip));
        }
    }
}





