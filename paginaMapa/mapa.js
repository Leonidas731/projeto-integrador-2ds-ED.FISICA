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
const abrirBtn = document.getElementById('abrir-btn');
const fecharBtn = document.getElementById('fechar-btn');
const popup = document.getElementById('meu-popup');

// Mostrar pop-up
abrirBtn.addEventListener('click', () => {
  popup.classList.add('mostrar');
});

// Fechar pop-up
fecharBtn.addEventListener('click', () => {
  popup.classList.remove('mostrar');
});
const abrirBtn = document.getElementById('abrir-btn');
const fecharBtn = document.getElementById('fechar-btn');
const popup = document.getElementById('meu-popup');

// Mostrar pop-up
abrirBtn.addEventListener('click', () => {
  popup.classList.add('mostrar');
});

// Fechar pop-up
fecharBtn.addEventListener('click', () => {
  popup.classList.remove('mostrar');
});
