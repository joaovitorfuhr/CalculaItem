
function contaPalavras(){
	var texto = document.ex01.campo.value;
	var palavra = texto.split([COLOR="Red"][B]' '[/B][/COLOR]);

	document.getElementById('alvo').innerHTML = [COLOR="red"][B]palavra.length[/B][/COLOR];
