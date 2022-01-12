
export function createBoard(Board_size) {
    const board = []
    for ( let i = 0 ; i < Board_size ; i++ ) {
        const row = []
        for ( let j = 0 ; j < Board_size ; j++ ) {
            const element = document.createElement('div')
            const tile = {
                element,
                i,
                j
            }
            row.push(tile)
        }
        board.push(row)
    }
    return board
}

export function floodFillExc(r,c,board,newCol) {
    if ( r < 0 || c < 0 || r >= board.length || c >= board.length ) return
    floodFill(r,c,board,board.length,board[r][c].element.style.backgroundColor,newCol)
}
export function floodFill(i,j,board,size,oldCol,newCol) {
    if( i < 0 || j < 0 || i >= size || j >= size || board[i][j].element.style.backgroundColor === newCol ) return;
    if( board[i][j].element.style.backgroundColor != oldCol ) return;
    board[i][j].element.style.backgroundColor = newCol;

    floodFill(i-1,j,board,size,oldCol,newCol)
    floodFill(i+1,j,board,size,oldCol,newCol)
    floodFill(i,j-1,board,size,oldCol,newCol)
    floodFill(i,j+1,board,size,oldCol,newCol)
}
