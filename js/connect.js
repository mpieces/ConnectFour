var headers = function(){
    $('#row0').children().text(function( index ) {
        return "I'm column number " + ( index + 1 );
    });
};

///////////////////////////////////////////
$(document).ready(function(){
    headers()
    player1 = true;
    player2 = false;
    $('.clickable').on('click', pieceDrop)

    // startTimer();
}); //End DOCUMENT READY


var pieceDrop = function(){
    var col = 'col'+$(this).attr('id')
    dropPiece(col)
}



var dropPiece = function(column){
    var active;

    if(player1 === true){
       for (var i = 6; i > 0; i--) {
            var row = 'row' + i;
            if ($('.' + row + '.' + column).hasClass('inactive')){
                $('.' + row + '.' + column).removeClass('inactive').addClass('active-red');
                checkForVerticalWinner(row, column,'active-red');
                checkForHorizontalWinner(row, column, 'active-red')
                checkForDiagonalWinner(row, column, 'active-red')
                {break;}
            }
            if (i === 1){
                alert("You can't fit any more pieces")
            }
        }
        player1 = false;
        return player2 = true
    }
    else {
        for (var i = 6; i > 0; i--) {
            console.log("Blacks turn")
            var row = 'row' + i;
            if ($('.' + row + '.' + column).hasClass('inactive')){
                $('.' + row + '.' + column).removeClass('inactive').addClass('active-black');
                checkForVerticalWinner(row, column,'active-black');
                checkForHorizontalWinner(row, column, 'active-black')
                checkForDiagonalWinner(row, column, 'active-black')
                {break;}
            }
            if (i === 1){
                alert("You can't fit any more pieces")
            }
        }
        player2 = false;
        return player1 = true
    }
} //end dropPiece


var checkForVerticalWinner = function(row, column, active){
	// var currentPlayerCell = c
    //var sameColumnCells = $('.' + column)
    var rowNum = parseInt(row.slice(-1))
    var oneBelow = $('.'+column + '.' + 'row' + (rowNum + 1))
    var twoBelow = $('.'+column + '.' + 'row' + (rowNum + 2))
    var threeBelow = $('.'+column + '.' + 'row' + (rowNum + 3))
    if(oneBelow.hasClass(active) && twoBelow.hasClass(active) && threeBelow.hasClass(active)){
        alert("You won vertically!")
    }
}

var checkForHorizontalWinner = function(row, column, active){
    var colNum = parseInt(column.slice(-1))
    var oneRight = $('.' + row + '.' + 'col' + (colNum + 1))
    var twoRight = $('.' + row + '.' + 'col' + (colNum + 2))
    var threeRight = $('.' + row + '.' + 'col' + (colNum + 3))
    var oneLeft = $('.' + row + '.' + 'col' + (colNum - 1))
    var twoLeft = $('.' + row + '.' + 'col' + (colNum - 2))
    var threeLeft = $('.' + row + '.' + 'col' + (colNum - 3))
    if(oneLeft.hasClass(active)){
        if(twoLeft.hasClass(active)){
            if(threeLeft.hasClass(active)){
                alert("You Won Horizontally!")
            }
        }
    }

    if(oneRight.hasClass(active)){
        if(twoRight.hasClass(active)){
            if(threeRight.hasClass(active)){
                alert("You Won Horizontally!")
            }
        }
    }
}

var checkForDiagonalWinner = function(row, column, active){
    var rowNum = parseInt(row.slice(-1))
    var colNum = parseInt(column.slice(-1))
    var upRightOne = $('.' + 'row' + (rowNum - 1) + '.' + 'col' + (colNum + 1))
    var upRightTwo = $('.' + 'row' + (rowNum - 2) + '.' + 'col' + (colNum + 2))
    var upRightThree = $('.' + 'row' + (rowNum - 3) + '.' + 'col' + (colNum + 3))
    var downRightOne = $('.' + 'row' + (rowNum + 1) + '.' + 'col' + (colNum + 1))
    var downRightTwo = $('.' + 'row' + (rowNum + 2) + '.' + 'col' + (colNum + 2))
    var downRightThree = $('.' + 'row' + (rowNum + 3) + '.' + 'col' + (colNum + 3))
    var upLeftOne = $('.' + 'row' + (rowNum - 1) + '.' + 'col' + (colNum - 1))
    var upLeftTwo = $('.' + 'row' + (rowNum - 2) + '.' + 'col' + (colNum - 2))
    var upLeftThree = $('.' + 'row' + (rowNum - 3) + '.' + 'col' + (colNum - 3))
    var downLeftOne =$('.' + 'row' + (rowNum + 1) + '.' + 'col' + (colNum - 1))
    var downLeftTwo = $('.' + 'row' + (rowNum + 2) + '.' + 'col' + (colNum - 2))
    var downLeftThree = $('.' + 'row' + (rowNum + 3) + '.' + 'col' + (colNum - 3))

    if(upRightOne.hasClass(active)){
        if(upRightTwo.hasClass(active)){
            if(upRightThree.hasClass(active)){
                alert("You Won Diagonally!")
            }
        }
    }

    if(upLeftOne.hasClass(active)){
        if(upLeftTwo.hasClass(active)){
            if(upLeftThree.hasClass(active)){
                alert("You Won Diagonally!")
            }
        }
    }

    if(downRightOne.hasClass(active)){
        if(downRightTwo.hasClass(active)){
            if(downRightThree.hasClass(active)){
                alert("You Won Diagonally!")
            }
        }
    }

    if(downLeftOne.hasClass(active)){
        if(downLeftTwo.hasClass(active)){
            if(downLeftThree.hasClass(active)){
                alert("You Won Diagonally!")
            }
        }
    }
} //END DIAGONAL WIN CHECK



// var startTimer = function() {
// 	$('.connect_4_table').on('click', function(event){
// 		$('.timer').toggle("fast");
// 	})
// }
function display( notifier, str )
{
    document.getElementById( notifier ).innerHTML = str;
}

function toMinuteAndSecond( x )
{
    return Math.floor( x / 60 ) + ':' +  ( x % 60 );
}

function setTimer( remain, actions )
{
    ( function countdown()
    {
        display( 'countdown', toMinuteAndSecond( remain ) );
        actions[remain] && actions[remain]();
        (remain -= 1) >= 0 && setTimeout( arguments.callee, 1000 );
    })();
}

var startTimer = function(){
	$( '.connect_4_table' ).on('click', function(){
    setTimer( 20, {
        20: function()
        {
            display( 'notifier', 'seconds');
        },
        1: function()
        {
            display( 'notifier', 'second');
        },
        0: function()
        {
            display( 'notifier', 'seconds');
        }
    } );
})
}





