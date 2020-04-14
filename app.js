//const argv = require('yargs').argv;
//importación
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porhacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear una nueva tarea');
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porhacer.getListado();
        for (let tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('======================='.green);
        }
        break;
    case 'actualizar':

        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);
        break;

    case 'borrar':

        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

/**
 * Descripción de lo anterior:
 * let comando = argv._[0]; me obtiene la palabra crear, listar o actualizar de consola esto debido a argv
 * El switch dependiendo delo que yo escriba va ejecutar la operacion indicada 
 */

/**
 * El comando crear: para crear una nueva tarea por hacer
 * El comando listar: listas las tareas que yo tengo por hacer
 * El comando actualizar: indicara si ya esta completo o pendiente
 * 

 Para recrdar el yargs me ayuda a ver todo en la consola
 
 */