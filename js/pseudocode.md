when player 1 clicks on the column 1
	check for the bottom-most available slot (td with inactive class)
		start the search from the bottom
		stop the search at the first inactive class from the bottom up
	remove the inactive class
	add color for that player (addClass for active color)


changes the color of the specific cell: 

$('.clickable:first-child').on('click',function(){
$('.col1.row3').addClass('active-red').removeClass('inactive') })

how do I save the clicked column as a variable? 




$('.clickable').on('click', function() {
 var clicked = this;
 console.log(clicked);
});

WILL GET THE ID OF THE 'THIS' FROM CLICKING ON THE HEADER

$('.clickable').on('click', function() {
 var colNum = $(this).attr('id')
 var col = 'col' + colNum
 console.log(colNum);
});


in the column that I clicked,
	find the td with the class col#
	for each element in the column with the same column class #
	check for inactive class
		if inactive 
			remove inactive
			add the game piece with the color


***********************************
iterate through the column !!!!!

$('.col'+1).each(function(index, object) {
console.log(index)
console.log($(object).reverse

});
