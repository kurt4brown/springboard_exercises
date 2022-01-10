function makeBoard(height, width){   
    const board = new Array(height);//make an empty array shape height
    for (let row in board){
        board[row]= new Array(width); //fill each item with shape width to get shape (height, width)
    }
    return board
};
let [height, width]=[6,7];
let [HEIGHT, WIDTH] = [height, width];
let b= makeBoard(height,width);

function makeHTMLBoard(height, width){
    const board = document.getElementById('board');
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', handleClick);
  
    for (let x = 0; x < WIDTH; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
    board.append(top);
}

bh=makeHTMLBoard(height, width);
console.log(bh);