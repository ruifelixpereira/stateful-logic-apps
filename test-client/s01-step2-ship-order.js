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
        url: config.changestateUrl,
        headers: messageHeaders,
        data: data
    });    
}


const sampleShipped = {
    "orderid": "333333",
    "newState": "Shipped"
};

changeOrderStatus(sampleShipped)
    .then(response => {
        if (response.data.message) {
          console.log("Response: " + JSON.stringify(response.data.message));
        }
    })
    .catch(error => {
        console.log("Error: " + error)
    });
