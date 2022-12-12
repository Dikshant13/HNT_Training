const Websocket =require("ws");

const wss = new Websocket.Server({port:8001});



wss.on('connection',ws=>{
    console.log('new client got connected');
    ws.on('message',data=>console.log('received data ${data}'));
    ws.on('close',()=>{console.log('client disconnected')})


});