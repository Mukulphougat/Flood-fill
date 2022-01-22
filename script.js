import {createBoard, floodFill, floodFillExc} from "./mineSweeper.js"

let input1 = document.getElementById("first_num")
let input2 = document.getElementById("second_num")
let x = document.getElementById("row")
let y = document.getElementById("column")
let rc = document.getElementById("xy")

let board_size = 9;
const board = createBoard(board_size)
const boardElement = document.querySelector(".grid")
boardElement.style.setProperty('--size',board_size)

function fillBoard(col) {
    board.forEach(row => {
        row.forEach(tile => {
                tile.element.style.backgroundColor = col
                boardElement.append(tile.element)
        })
    })
}
function makeGrid() {
    board.forEach(row => {
        row.forEach(tile => {
            tile.element.style.backgroundColor = "white"
            tile.element.addEventListener("click",event => {
                event.preventDefault();
                rc.innerText = ""
                rc.append((tile.i+1)+" "+(tile.j+1))
                tile.element.style.backgroundColor = input1.value
                event.preventDefault();
            })

            boardElement.append(tile.element)
        })
    })
}
fillBoard("white")
makeGrid()
// document.querySelector('.click-fill').addEventListener('click', () => {
//     makeGrid()
// })
document.querySelector('.btnFill').addEventListener('click',() =>{
    fillBoard(input1.value)
})

document.querySelector('.btnFloodFill').addEventListener('click',() =>{
    let r = parseInt(x.value)
    let c = parseInt(y.value)
    floodFillExc(r-1,c-1,board,input2.value)
})

document.querySelector('.btnRes').addEventListener('click',() =>{
    input1.value = null
    input2.value = null
    x.value = null
    y.value = null
    rc.innerText = ""
    for ( let i = 0 ; i < board.length ; i++ ) {
        for ( let j = 0 ; j < board[0].length ; j++ ) {
            board[i][j].element.classList.remove("changing");
        }
    }
    fillBoard("white")
})




