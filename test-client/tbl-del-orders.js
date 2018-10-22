var azure = require('azure-storage');

/**
 * Development: Local environment override.
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const config = require('./config').storageAccountConfig;

var tableSvc = azure.createTableService(config.accountName, config.accountKey);

var task = {
  PartitionKey: {'_':'orders'},
  RowKey: {'_': '333333'}
};

tableSvc.deleteEntity('state', task, function(error, response){
  if(!error) {
    // Entity deleted
    console.log("Order deleted!!!");
  }
});


