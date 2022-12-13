
let name = document.getElementById("data1");
  var ws = new WebSocket('ws://' + document.domain + ':' + location.port + '/feed'),
          messages = document.createElement('ul');
  ws.onmessage = function (event) {
    var messages = document.getElementsByTagName('ul')[0],
            message = document.createElement('li'),
            content = document.createTextNode('Received: ' + event.data);
    message.appendChild(content);
    messages.appendChild(message);
  };
  document.body.appendChild(messages);
  window.setInterval(function() {
    data = `Hello, I am Dikshant`
    ws.send(data);
    console.log('we are connected')
    var messages = document.getElementsByTagName('ul')[0],
            message = document.createElement('li'),
            content = document.createTextNode('Sent: ' + data);
    message.appendChild(content);
    messages.appendChild(message);
  }, 4000);