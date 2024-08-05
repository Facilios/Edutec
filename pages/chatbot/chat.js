const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const responses = {
    1: "Para redefinir sua senha, vá para Configurações e clique em 'Redefinir Senha'.",
    2: "Você pode encontrar seus pedidos na seção 'Meus Pedidos' no menu principal.",
    3: "Para rastrear sua encomenda, use o número de rastreamento enviado por email.",
    4: "Por favor, descreva sua dúvida e iremos ajudá-lo o mais rápido possível."
};

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        appendMessage(userMessage, 'user-message');
        respondToMessage(userMessage);
        userInput.value = "";
    }
}

function sendMessageOption(option) {
    const message = responses[option];
    appendMessage(message, 'user-message');
    respondToMessage(option);
}

function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToMessage(message) {
    let response = "Desculpe, eu não entendi isso.";
    if (responses[message]) {
        response = responses[message];
    }
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        appendMessage(response, 'bot-message');
    }, 1000);
}

function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-message bot-message';
    typingIndicator.textContent = 'GenoChat está digitando...';
    typingIndicator.id = 'typing-indicator';
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        chatBox.removeChild(typingIndicator);
    }
}

function clearChat() {
    chatBox.innerHTML = '<div class="chat-message bot-message" id="clear-message">Chat limpo.</div>';
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(() => {
        const clearMessage = document.getElementById('clear-message');
        if (clearMessage) {
            chatBox.removeChild(clearMessage);
        }
        appendMessage('Bem-vindo ao GenoChat! Como posso ajudar você hoje?', 'bot-message');
        showOptions();
    }, 3000); // A mensagem "Chat limpo" desaparecerá após 3 segundos
}

function showOptions() {
    const options = document.getElementById('options');
    options.style.display = 'flex';
}
