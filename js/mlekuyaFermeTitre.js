$(document).ready(function(){
	$('#titreDroite  .lesTitres').hide(); 
	$('#titreGauche  .lesTitres').hide(); 
	$("h1").click(function(){
		$(this).next("ul").slideToggle("slow").siblings("ul:visible").slideUp("slow");
	})
})