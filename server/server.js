const { SerialPort } = require('serialport');                               //allows communication between node and devices throw serial port 
const { ReadlineParser } = require('@serialport/parser-readline');          //proccessing data from arduino 
const { WebSocketServer } = require('ws');

const port = new SerialPort({
    path: 'COM11',
    baudRate: 9600                                                          //communication speed
});

const parser = port.pipe(
    new ReadlineParser({ delimiter: '\r\n' })
);

const express = require('express');                                         //node fw for creating web server
const app = express();

port.on('open', () => {
    console.log('Arduino connected!');
});


app.use(express.static('public'));

const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const wss = new WebSocketServer({server});

parser.on('data', (data) => {
    console.log(data);

    wss.clients.forEach((client) => {
        if (client.readyState === 1) {
            client.send(data);
        }
    });
});

