const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'

        },
        completado: {
            default: true,
            alias: 'd',
            desc: 'marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borra una tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}