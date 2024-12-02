// Get elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Initialize chatbot responses
const responses = {
    'hello': 'Hi! How can I help you today?',
    'hi': 'Hello! What\'s on your mind?',
    'how are you': 'I\'m doing great, thanks! How about you?',
    'what is your name': 'My name is Chatbot, nice to meet you!',
    'default': 'I didn\'t understand that. Can you please rephrase?'
};

// Add event listener to send button
sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
        addChatLog('user', userInputValue);
        const response = getResponse(userInputValue);
        addChatLog('bot', response);
        userInput.value = '';
    }
});

// Add chat log entry
function addChatLog(type, message) {
    const chatLogEntry = document.createElement('li');
    chatLogEntry.textContent = message;
    chatLogEntry.className = type;
    chatLog.appendChild(chatLogEntry);
}

// Get chatbot response
function getResponse(input) {
    const inputLowercase = input.toLowerCase();
    for (const key in responses) {
        if (inputLowercase.includes(key)) {
            return responses[key];
        }
    }
    return responses['default'];
}