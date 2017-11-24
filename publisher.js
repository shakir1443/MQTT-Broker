var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.2.91')

client.on('connect', function () {
  setInterval(function() {
       client.publish('presence', 'Hello mqtt')
        console.log('Message Sent')
    }, 5000);
})
