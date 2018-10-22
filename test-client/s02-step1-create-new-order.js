const axios = require('axios');

const sample = require('./s02-order.json');

/**
 * Development: Local environment override.
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const config = require('./config').controllerApiConfig;

const messageHeaders = {
  'Content-Type': 'application/json'
};


function createOrder(data) {
    return axios({
        method: 'post',
        url: config.scenario02Url,
        headers: messageHeaders,
        data: data
    });    
}

createOrder(sample)
    .then(response => {
        if (response.data.message) {
          console.log("Response: " + JSON.stringify(response.data.message));
        }
    })
    .catch(error => {
        console.log("Error: " + error)
    });
