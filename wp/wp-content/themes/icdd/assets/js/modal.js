// Selecionando elementos
const trigger = document.getElementById('trigger');
const modal = document.getElementById('modal');
const content = document.getElementById('content');
const closeModalBtn = document.getElementById('closeModalBtn');
const footer = document.getElementById('footer'); // Seleciona o footer

// Função para abrir o modal a uma distância específica do footer
function openModal() {
    // Pega a posição do footer
    const footerRect = footer.getBoundingClientRect();
    
    // Define a distância fixa em relação ao footer (por exemplo, 20px para cima e 50px da esquerda)
    const horizontalOffset = 0; // 50px da esquerda do footer
    const verticalOffset = -600;  // 20px acima do footer
    
    // Calcula a posição final do modal baseado no footer e na posição da página
    modal.style.left = `${footerRect.left + horizontalOffset}px`;
    modal.style.top = `${footerRect.top + window.scrollY + verticalOffset}px`; // `window.scrollY` considera o scroll da página
    
    // Mostra o modal
    modal.style.display = 'block'; 
    content.classList.add('blur'); // Aplica o blur ao conteúdo
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none'; // Oculta o modal
    content.classList.remove('blur'); // Remove o blur
}

// Evento de clique na palavra (abre o modal)
trigger.addEventListener('click', openModal);

// Evento de clique no botão "X" (fecha o modal)
closeModalBtn.addEventListener('click', closeModal);
