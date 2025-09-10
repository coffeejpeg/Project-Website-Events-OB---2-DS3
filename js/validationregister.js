/*
 * Validação dos inputs e selects do formulário de cadastro.
 * Exibe notificação customizada (notify) ao sucesso.
 */

/**
 * Função para criar notificação
 * @param {string} message - Parametro para mensagem exibida na notificação
 * @param {string} type - Parametro para o tipo da notificação (success ou error)
 */

function showNotify(message, type = 'success') {
    let notify = document.createElement('div');
    notify.className = `notify ${type}`;
    notify.textContent = message;
    Object.assign(notify.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#4caf50' : '#f44336',
        color: '#fff',
        padding: '16px 24px',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        zIndex: 9999,
        fontSize: '16px',
        opacity: 1,
        transition: 'opacity 0.5s'
    });
    document.body.appendChild(notify);
    setTimeout(() => {
        notify.style.opacity = 0;
        setTimeout(() => notify.remove(), 500);
    }, 2500);
}

// Função para a validação do formulário de cadastro
function validateRegisterForm(form) {
    let valid = true; // Assume que o formulário é válido inicialmente

    const inputs = form.querySelectorAll('input[required], select[required]'); // Seleciona todos os inputs e selects obrigatórios dentro do formulário
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.style.borderColor = '#f44336';
        } else {
            input.style.borderColor = '';
        }
    });
    return valid;
}

// Realiza a função realizar um evento de submit e o redirecionamento para a dashboard se tiver sucesso
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateRegisterForm(form)) {
                // Coleta os dados do formulário
                let endereco = form.address.value;
                if (endereco === 'outra') {
                    endereco = form['outra-endereco'].value;
                }
                const signupData = {
                    nome: form.name.value,
                    email: form.email.value,
                    senha: form.password.value,
                    tipoEmpresa: form['company-type'].value,
                    endereco: endereco,
                    bairro: form.bairro.value
                };
                // Salva no localStorage
                localStorage.setItem('signupData', JSON.stringify(signupData));
                showNotify('Cadastro realizado com sucesso!', 'success');
                setTimeout(() => {
                    window.location.href = '/pages/dashboard.html';
                }, 1000);
            } else {
                showNotify('Por favor, preencha todos os campos obrigatórios.', 'error');
            }
        });
    }
});