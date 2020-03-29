const socket = io("/");

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

function sendMessage(message) {
  socket.emit("sendMessage", { message });
  console.log(`You: ${message}`);
}

function handleIncomingMessage(data) {
  const { nickname, message } = data;
  console.log(`${nickname}: ${message}`);
}

socket.on("incomingMessage", handleIncomingMessage);
