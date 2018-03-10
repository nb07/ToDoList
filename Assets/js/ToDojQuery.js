//check off specific todos by clicking.
//calling the parent Ul so that when li is clicked it uses the function.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	//when clicking on the span, deletes the parent li tag. 
	$(this).parent().fadeOut(500, function(){
		//removes li after it fades out.
		$(this).remove();
	});
	//event.stopPropagation stops the click from bubling up to through the html hierarchy 
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	//if enter key is pressed
	if(event.which === 13){
		//grab the input and put it in new var.
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		//.append() takes a string of html and then append new elements. 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})