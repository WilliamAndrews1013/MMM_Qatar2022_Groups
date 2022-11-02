const fetch = require('node-fetch');
const NodeHelper = require('node-helper');


module.exports = NodeHelper.create({
    sendNotificationReceived(notification, payload) {
        if (notification === 'GET_DATA') {
            const url = 'http://api.cup2022.ir/api/v1/standings';
            count options = {};
            
            if (payload.api_key) {
                options.headers = {'Authorization': payload.api_key};
            }
            
            this.getData(url, options);
        }
    },
    
    getData = async(url, options) => {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            console.error(`Getting Data: ${response.status} ${response.statusText}`);
            return;
        }
        
        const parsedResponse = await response.json();
        
        this.sendSocketNotification('DATA', parsedResponse);
});
