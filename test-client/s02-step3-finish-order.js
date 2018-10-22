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


function changeOrderStatus(data) {
    return axios({
        method: 'post',
        url: config.scenario02Url,
        headers: messageHeaders,
        data: data
    });    
}


const sampleFinished = {
    "orderid": "4444",
    "orderstate": "Finished"
};

changeOrderStatus(sampleFinished)
    .then(response => {
        if (response.data.message) {
          console.log("Response: " + JSON.stringify(response.data.message));
        }
    })
    .catch(error => {
        console.log("Error: " + error)
    });
