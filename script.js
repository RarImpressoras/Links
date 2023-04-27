function download() {
	// Seleciona o elemento a ser transformado em imagem
	var elemento = document.getElementById("elementoParaDownload");

	// Cria um novo canvas com as mesmas dimensões do elemento
	var canvas = document.createElement("canvas");
	canvas.width = elemento.offsetWidth;
	canvas.height = elemento.offsetHeight;

	// Obtém o contexto 2D do canvas
	var contexto = canvas.getContext("2d");

	// Desenha o conteúdo do elemento no canvas
	contexto.drawImage(elemento.childNodes[0], 0, 0, elemento.offsetWidth, elemento.offsetHeight);

	// Cria uma URL para o canvas
	var url = canvas.toDataURL();

	// Cria um link de download e simula um clique nele para baixar a imagem
	var link = document.createElement("a");
	link.download = "imagem.png";
	link.href = url;
	link.click();
}
