// dashboard.js

const userData = JSON.parse(localStorage.getItem('signupData'));

// Função para exibir os dados no dashboard
function showUserData() {
    if (!userData) {
        document.getElementById('dashboard-info').innerText = 'Nenhum dado encontrado.';
        return;
    }

    // Exemplo: supondo que signupData tenha nome, email e senha
    document.getElementById('dashboard-info').innerHTML = `
        <h2>Bem-vindo, ${userData.nome}!</h2>
        <p>Email: ${userData.email}</p>
    `;
}

// Chama a função ao carregar a página
window.onload = showUserData;
// Recupera os dados do signup armazenados no localStorage
function showUserData() {
    const userData = JSON.parse(localStorage.getItem('signupData'));
    const infoDiv = document.getElementById('dashboard-info');
    if (!userData) {
        infoDiv.innerText = 'Nenhum dado encontrado.';
        return;
    }
    infoDiv.innerHTML = `
        <h2>Bem-vindo, ${userData.nome}!</h2>
        <p><b>Email:</b> ${userData.email}</p>
        <p><b>Tipo de Empresa:</b> ${userData.tipoEmpresa}</p>
        <p><b>Endereço:</b> ${userData.endereco}</p>
        <p><b>Bairro:</b> ${userData.bairro}</p>
    `;
}

window.onload = showUserData;


// Parte para gerar alguns valores aleatórios para exemplificação
      document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.stat-card').forEach(function(card) {
          const title = card.querySelector('.stat-title').textContent.trim().toLowerCase();
          let value = 0;
          if (title.includes('mensagens')) {
            value = Math.floor(Math.random() * 1501);
          } else if (title.includes('participa')) {
            value = Math.floor(Math.random() * 201);
          } else if (title.includes('evento')) {
            value = Math.floor(Math.random() * 101);
          }
          card.querySelector('.stat-value').textContent = value;
        });
      });