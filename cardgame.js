let player = {
    name: "Per",
    chips: 145
}
let sum = 0
let cards=[]//ordered list of item
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber===1){
        return 11
    }
    else{
         return randomNumber
    } 
}

function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards=[firstCard,secondCard]
    renderGame()
}


function renderGame(){
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = " You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent=message
    sumEl.textContent="Sum :"+sum
    //cardEl.textContent="Cards :"+cards[0]+" "+cards[1]
    cardEl.textContent="Cards :"
    for(let i=0; i< cards.length; i++){
        cardEl.textContent+=cards[i]+" "
    }

}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let newone=getRandomCard()
        sum+=newone
        cards.push(newone)
        renderGame()
    }
}

