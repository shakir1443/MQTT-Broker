var mqtt = require('mqtt')
var moment = require('moment');
var client  = mqtt.connect('mqtt://192.168.2.91')

client.on('connect', function () {
  client.subscribe('presence')
  })
  client.on('message', function (topic, message) {
    // message is Buffer
    context = message.toString()
    console.log(context)
  })
