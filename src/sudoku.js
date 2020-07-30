import React from 'react';


var board = '090000006\n' + 
'000960485\n' +
'000581000\n' +
'004000000\n' +
'517200900\n' +
'602000370\n' +
'100804020\n' +
'706000810\n' +
'300090000';


parseBoard = function(board) {
    // split the board at each new line, and use map
    // to split each row into an array of characters
    return board.split('\n').map(function(row) {
        // use map to convert the characters into integers
            return row.split('').map(function(num) {
                return +num;
            });
    });
}
export default function Sudoku(props) {

    
}