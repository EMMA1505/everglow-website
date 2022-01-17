// const services = [
//     {
//         id: 1,
//         service: 'EXPRESS',
//         image: 'img/express.svg',
//         alt: 'Limado de uñas',
//         // tasks: [{task1: ' Limado',}, {task2: ' Pulido',}, {task3: ' Esmaltado'}]
//         task1: ' Limado',
//         task2: ' Pulido',
//         task3: ' Esmaltado'
        
//     },
//     {
//         id: 2,
//         service: 'BEAUTY',
//         image: 'img/beauty.svg',
//         alt: 'Extracción de cutícula',
//         task1: ' Limado',
//         task2: ' Cutícula',
//         task3: ' Esmaltado'
//     },
//     {
//         id: 3,
//         service: 'SEMI PERMANENTE',
//         image: 'img/semi.svg',
//         alt: 'Uñas pintadas en secado UV',
//         task1: ' Uñas brillantes y perfectas',
//         task2: ' Durabilidad entre 15 a 20 días',
//         task3: ' Variedad de colores'
//     },
//     {
//         id: 4,
//         service: 'DECO',
//         image: 'img/deco.svg',
//         alt: 'Uñas decoradas con dibujos',
//         task1: ' Diseños exclusivos',
//         task2: ' Colocación de apliques',
//         task3: ' Texturas'
//     },
//     {
//         id: 5,
//         service: 'ESCULPIDAS',
//         image: 'img/esculpidas.svg',
//         alt: 'Uñas esculpidas',
//         task1: ' Formas y extensión',
//         task2: ' Perfección y naturalidad',
//         task3: ' Protección de uña'
//     },
//     {
//         id: 6,
//         service: 'FEET BEAUTY',
//         image: 'img/pedicure.svg',
//         alt: 'Esmaltado de uñas de pies',
//         task1: ' Limado de uñas y durezas',
//         task2: ' Cutícula',
//         task3: ' Esmaltado'
//     },
// ];

// module.exports = services;

const request = require('postman-request');

// const baseURL = 'http://localhost:3001';
const baseURL = 'https://everglow-api.herokuapp.com';

const getAllServices = (callback) => {
  request(`${baseURL}/services`, (err, res) => {
    if(err) return callback(err, undefined);
    const allServices = JSON.parse(res.body);
    return callback(undefined, allServices);
  });
};

// const getSingleProduct = (callback) => {
//   request(`${baseURL}/product/123`, (err, res) => {
//     if(err) return callback(err, undefined);
//     const singleProduct = res.body;
//     return callback(undefined, singleProduct);
//   });
// };


// module.exports = { getAllProducts, getSingleProduct };

module.exports = { getAllServices }