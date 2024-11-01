
    // Script para alternar entre modos claro e escuro
    const themeToggle = document.getElementById('theme-toggle');

    // Função para aplicar o tema com base no localStorage
    function applyTheme() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // Muda o ícone do botão para sol
        } else {
        document.body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙'; // Muda o ícone do botão para lua
        }
    }

    themeToggle.addEventListener('click', () => {
        // Alterna a classe dark-mode
        const isDarkMode = document.body.classList.toggle('dark-mode');
    // Armazena a preferência no localStorage
    localStorage.setItem('darkMode', isDarkMode);
    // Atualiza o ícone do botão
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    });

    // Chama a função para aplicar o tema ao carregar a página
    applyTheme();

