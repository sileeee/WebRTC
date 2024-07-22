const socket = new WebSocket(`ws://${window.location.host}`);

// message == event
socket.addEventListener("open", () => {
    console.log("Connected to Server");
})

socket.addEventListener("message", (message) => {
    console.log("New message : ", message.data);
})

socket.addEventListener("close", () => {
    console.log("Disconnected from Server");
});

// 10초 후에 backend로 메세지 보냄
setTimeout(() => {
    socket.send("hello from the browser!");
}, 10000)