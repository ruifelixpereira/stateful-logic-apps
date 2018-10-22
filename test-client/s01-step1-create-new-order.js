const axios = require('axios');

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
        url: config.createorderUrl,
        headers: messageHeaders,
        data: data
    });    
}

const sample = require('./s01-order.json');

createOrder(sample)
    .then(response => {
        if (response.data.message) {
          console.log("Response: " + JSON.stringify(response.data.message));
        }
    })
    .catch(error => {
        console.log("Error: " + error)
    });
