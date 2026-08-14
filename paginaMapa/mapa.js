function Logar() {
    console.log("Função Logar() foi chamada");
    console.log("URL de redirecionamento: ../pistaAtletismo/pista.html");
    
    // Teste 1: Verifica se a URL está correta
    const url = "../pistaAtletismo/pista.html";
    console.log("Tentando redirecionar para: " + url);
    
    // Teste 2: Tenta o redirecionamento
    try {
        window.location.href = url;
        console.log("Redirecionamento executado");
    } catch(error) {
        console.error("Erro ao redirecionar: " + error);
    }
    logar();
}