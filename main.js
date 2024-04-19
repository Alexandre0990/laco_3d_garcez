function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("2+2 é ?");

    
    if (respostaTime.toLowerCase() === "4") {
      alert("Isso mesmo! você sabe matematica basica");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! BURRO.");
    }
  }
}