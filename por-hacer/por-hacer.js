//Para guardar las notas en un archivo
const fs = require('fs');

let listadoPorHacer = [];


//guardar en el archivo JSON
const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });
}

//cargar desde el archivo JSON

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {

        listadoPorHacer = [];

    }

}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB();
    console.log(descripcion);

    let index = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (index.length === listadoPorHacer.length) {
        return false;
    } else {

        listadoPorHacer = index;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}