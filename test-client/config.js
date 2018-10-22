
const storageAccountConfig = {
  accountName: process.env['storage_account_name'],
  accountKey: process.env['storage_account_key']
}

const controllerApiConfig = {
    subscribeUrl: process.env['subscribe_url'],
    unsubscribeUrl: process.env['unsubscribe_url'],
    changestateUrl: process.env['changestate_url'],
    createorderUrl: process.env['createorder_url'],
    scenario02Url: process.env['scenario_02_url']
    
}

module.exports = {
  storageAccountConfig,
  controllerApiConfig
};
