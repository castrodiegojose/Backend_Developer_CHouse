const socket = io.connect();


function render(data){
    const html = data.map((elem, idex)=>{
        return (
            `<div> ${elem.author} : ${elem.text}</div>
        `);        
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data){
    render(data);
});


function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false;
}

