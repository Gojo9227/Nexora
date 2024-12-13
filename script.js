// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}. We'll contact you at ${email} soon!`);
});

// Chat with Discord Bot
const chatBox = document.getElementById('chat-box');
const chatMessage = document.getElementById('chat-message');
const sendChat = document.getElementById('send-chat');

sendChat.addEventListener('click', async () => {
  const message = chatMessage.value.trim();
  if (!message) return;

  // Display user message
  const userMessage = document.createElement('div');
  userMessage.textContent = `You: ${message}`;
  chatBox.appendChild(userMessage);

  // Send message to Discord bot backend
  const response = await fetch('https://your-backend-url/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();

  // Display bot response
  const botMessage = document.createElement('div');
  botMessage.textContent = `Bot: ${data.reply}`;
  chatBox.appendChild(botMessage);

  chatMessage.value = '';
});
