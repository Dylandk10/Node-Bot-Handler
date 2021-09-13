
//just for testing right now
const socket = io("http://127.0.0.1:8080");
socket.on("connection", (s) => {
    console.log("Connecting to server.");
});

//when bot message reccieved
socket.on("bot-message", (message) => {
    let list = document.getElementById("list");
    let l = document.createElement('li');
    l.innerHTML = "<li style='color:red;'> BOT: "+message+"</li>";
    list.appendChild(l);
});


//listen for enter key 
document.getElementById("msgField").addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        appendMessage();
    }
});

//send btn 
document.getElementById("sendBtn").addEventListener("click", () => {
     appendMessage();
});


//function to send and append the message 
function appendMessage() {
    let msg = document.getElementById("msgField");
    let list = document.getElementById("list");
    let l = document.createElement('li');
    l.innerHTML = "<li> YOU: "+msg.value+"</li>";
    list.appendChild(l);
    socket.emit("bot-message", msg.value);
    msg.value = "";
}