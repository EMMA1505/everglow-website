const request = require('postman-request');

const baseURL = 'https://everglow-api.herokuapp.com';

const getAllServices = (callback) => {
  request(`${baseURL}/services`, (err, res) => {
    if(err) return callback(err, undefined);
    const allServices = JSON.parse(res.body);
    return callback(undefined, allServices);
  });
};

module.exports = { getAllServices }