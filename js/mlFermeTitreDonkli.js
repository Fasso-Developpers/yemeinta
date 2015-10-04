$(document).ready(function(){
	/*$('#titreDroite  .lesTitres').hide();*/
	$('#titreDroite  .lesLiens').hide(); 
	/*$('#titreGauche  .lesTitres').hide();*/
	$('#titreGauche  .lesLiens').hide(); 
	$("h1").click(function(){
		$(this).next("ul").slideToggle("slow").siblings("ul:visible").slideUp("slow");
	})
})