var azure = require('azure-storage');

/**
 * Development: Local environment override.
 */
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const config = require('./config').storageAccountConfig;

var tableSvc = azure.createTableService(config.accountName, config.accountKey);

/*
var entGen = azure.TableUtilities.entityGenerator;
var task = {
  PartitionKey: entGen.String('hometasks'),
  RowKey: entGen.String('1'),
  description: entGen.String('take out the trash'),
  dueDate: entGen.DateTime(new Date(Date.UTC(2015, 6, 20))),
};

tableSvc.insertEntity('mytable',task, function (error, result, response) {
    if(!error){
      // Entity inserted
    }
  });
*/

var query = new azure.TableQuery()
  .top(5)
  .where('PartitionKey eq ?', 'orders');


tableSvc.queryEntities('state',query, null, function(error, result, response) {
  if(!error) {
    console.log("=========== Orders STATE =============================================");

    // query was successful
    response.body.value.forEach( element => {
      console.log(JSON.stringify(element));
    });

    console.log(' ');
    
  }
});

/*
  var query = new azure.TableQuery()
  .select(['description', 'dueDate'])
  .top(5)
  .where('PartitionKey eq ?', 'hometasks');
*/



var query2 = new azure.TableQuery()
  .top(5)
  .where('PartitionKey eq ?', 'subs');


tableSvc.queryEntities('subscriptions',query2, null, function(error, result, response) {
  if(!error) {

    console.log("=========== Subscriptions STATE =============================================");

    // query was successful
    response.body.value.forEach( element => {
      console.log(JSON.stringify(element));
    });

    console.log(' ');
    
  }
});
