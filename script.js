const cedula = document.getElementById('cedula');
const codigoElement = document.getElementById('codigo');
let flipped = false;

// Função para gerar um ID único
function gerarIdUnico() {
    return Math.floor(Math.random() * 1000000) + 1; // Gera um ID aleatório entre 1 e 1.000.000
}

// Exibir o ID gerado no canto inferior direito
const idPessoa = gerarIdUnico();
codigoElement.textContent = idPessoa;

cedula.addEventListener('click', () => {
    if (!flipped) {
        cedula.style.transform = 'rotateY(180deg)';
    } else {
        cedula.style.transform = 'rotateY(0deg)';
    }
    flipped = !flipped;
});
