const board = document.getElementById('board')
const squre = document.getElementsByClassName('square')
const player = ['X', 'O']
let currentPlayer = player[0]
const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '30px'
endMessage.style.textAlign='center'
board.after(endMessage)
const Restartbutton = document.getElementById('restartbutton')
const WinnigCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

for(let i=0; i<squre.length; i++){
    squre[i].addEventListener('click', ()=>{
        if(squre[i].textContent !== '' || win(currentPlayer)){
            return
        }
        squre[i].textContent = currentPlayer
        if(win(currentPlayer)){
            endMessage.textContent = `Game Over! ${currentPlayer} wins!`
            ShowRestartButton()
            return
        }
        if(tie()){
            endMessage.textContent = 'Game is tied.'
            ShowRestartButton()
            return
        }
        currentPlayer = (currentPlayer === player[0])? player[1]:player[0]
        if(currentPlayer == player[0]){
            endMessage.textContent = `X's turn!`
        }
        if(currentPlayer == player[1]){
            endMessage.textContent = `O's turn!`
        }
    })
}
function  ShowRestartButton(){
    Restartbutton.style.display = 'block';
}
function win(currentPlayer){
    for(let i=0; i<WinnigCombination.length; i++){
        const [a,b,c] = WinnigCombination[i];
        if(squre[a].textContent == currentPlayer && squre[b].textContent == currentPlayer && squre[c].textContent == currentPlayer){
            return true;
        }
    }
    return false
}
function tie(){
    for(let i=0; i<squre.length; i++){
        if(squre[i].textContent === ''){
            return false
        }
    }
    return true
}
function restartbutton(){
   
    for(let i=0; i<squre.length; i++){
        squre[i].textContent = ""
    }
    endMessage.textContent = `X's turn!`
    currentPlayer = player[0]
    Restartbutton.style.display = 'none';
    
}