
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path/posix');
const colors = require('colors');


const crearArchivo = async( base, listar, hasta) =>{

        try{
           
            let salida = "";

            for( let i = 1; i <= hasta; i++ ){
                salida += (`${base} X ${i} = ${ base*i}\n`);
            }
            
            if(listar){
                console.log("=======================");
                console.log(`Tabla del: `, base);
                console.log("=======================");
                console.log(colors.red(salida));
            }
            

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
           
            return (`tabla-${base}.txt`);

        }catch(error){
            throw error;
        }
}

module.exports = {
    crearArchivo
}