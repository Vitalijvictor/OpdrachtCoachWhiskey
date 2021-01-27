$(document).ready(function() { 
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
	//---- Coach Opdracht 01
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

	// Wijzig kleur body
	/*document.getElementById("blue").addEventListener("click", function(){		
		$('body').css('background-color', '#456789')
	});

	document.getElementById("red").addEventListener("click", function(){
		$('body').css('background-color', '#c43232')
	});

	document.getElementById("green").addEventListener("click", function(){
		$('body').css('background-color', '#3cc432 ')
	});*/
	
	//JQuey Wijzig kleur body//
	$("#blue").on("click", function(){		
		$('body').css('background-color', '#456789')
	});

	$("#red").on("click", function(){
		$('body').css('background-color', '#c43232')
	});

	$("#green").on("click", function(){
		$('body').css('background-color', '#3cc432 ')
	});
	// Verwijder foto's
	
	/*document.getElementById("verwijder_eerste_foto").addEventListener("click", function(){
		$('img:first').remove();
	});
	document.getElementById("verwijder_laatste_foto").addEventListener("click", function(){
		$('img:last').remove();
	});*/

	// Jquery Verwijder foto's//
	
	$("#verwijder_eerste_foto").on("click", function(){
		$('img:first').remove();
	});
	$("#verwijder_laatste_foto").on("click", function(){
		$('img:last').remove();
	});
	
	// Wijzigen opmaak woord whisk(e)y bij mouseover/mouseout
	$('#panel_item_1 span').mouseover(function(){
		$(this).css('color', 'red');
		$(this).addClass('bold');
	});
	$('#panel_item_1 span').mouseout(function(){
		$(this).css('color', 'black');
		$(this).removeClass('bold');
	});

	
	// Voeg item toe aan menu
	
	$('#submenu ul').append('<li><a href="https://nl.wikipedia.org/wiki/Whisky" class="sub_menu_item">Wiki</a></li>');

	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
	//---- Coach Opdracht 02
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


	// Animeer foto's
	
	var setTimeoutConst, timeoutCss;

	$('img').on("mouseover", function(){

		$(this).removeClass('opaque');
	});

	$('img').on("mouseout", function(){ 

		setTimeoutConst = setTimeout(function () {
			$('img')
				.addClass('opaque');		
		}, 1000);
	});

	// Toon of verberg de inhoud van de paragraaf
	$('#item_header_1').on('click', function(){
		$('#item_paragraph_2').slideToggle(2000);
	});
	$('#item_header_2').on('click', function(){
		$('#item_paragraph_1').slideToggle(2000);
	});
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
	//---- Coach Opdracht 03
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


	// Ajax request + accordion




});