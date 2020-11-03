/**
 * 
 */
function divEdit() {
	/* busca na �rvore DOM o elemento com ID "header" */
	var header = document.getElementById("header");
	/* guarda o c�digo HTML de dentro do elemento */
	var conteudo = header.innerHTML;
	/* reescreve o conte�do adicionando outras tags */
	header.innerHTML = "<strong>" + conteudo + "</strong>";
	/* cria um novo elemento DOM */
	var paragrafo = document.createElement("p");
	/* configura a propriedade title do elemento */
	paragrafo.setAttribute("title", "Novo par�grafo");
	/* cria um n� de texto */
	var txt = document.createTextNode("Par�grafo adicionado a �rvore DOM");
	/* insere o texto ao paragr�fo */
	paragrafo.appendChild(txt);
	/* insere o paragr�fo na p�gina */
	header.appendChild(paragrafo);
	setTimeout("divEdit()", 5000);
}