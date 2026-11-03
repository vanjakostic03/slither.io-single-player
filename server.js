const { SerialPort } = require('serialport');                               //allows communication between node and devices throw serial port 
const { ReadlineParser } = require('@serialport/parser-readline');          //proccessing data from arduino 

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

parser.on('data', (data) => {
    console.log(data);
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});