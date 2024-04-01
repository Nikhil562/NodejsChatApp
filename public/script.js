
var socket = io();

let btn = document.getElementById('btn');
btn.onclick = function exec() {
    socket.emit('from_client');
}

socket.on('from_server', 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat app</title>
</head>
<body>
    <h1>Chat app using Sockets</h1>

    <input type="text" id="newmsg">
    <button id="btn">Send</button>

    <ul id="msglist">
        
    </ul>

    <script src="/socket.io/socket.io.js"></script>
    <script src="script.js"></script>
</body>
</html>
() => {
    const div = document.createElement('div');
    div.innerText = 'New event from server';
    document.body.appendChild(div);
});
