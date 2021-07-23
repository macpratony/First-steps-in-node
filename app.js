
const { option } = require('yargs');
const { crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( n => console.log(n.rainbow, 'creado'))
    .catch( err => console.log(err));
