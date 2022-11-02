/**
 * @file MMM-Qatar2022_Groups.js
 *
 * @author WilliamAndrews1013
 * @license ISC
 *
 * @see  https://github.com/WilliamAndrews1013/MMM-Qatar2022_Groups
 */
 
 
Module.register('MMM-Qatar2022_Groups', {
    // Set the minimum MagicMirror module version
    requiresVersion: "2.20.0",
    
    defaults: {
	api_key: false
    

    loading: true,

    /*getStyles: function(){
        return ["font-awesome.css", "MMM-Qatar2022-Groups.css"]
    },*/


    // Module Properties
    groups:[],
    
    start() {
        Log.info(`Starting module: ${this.name}`);
        this.getData();
    },
    
    getData: function () {
	this.sendSocketNotification('GET_DATA',{this.config.aoi_key});
    },
    
    socketNotificationReceived(notification, payload) {
	if (notification === 'DATA') {
	    console.log(payload)
	}
    },
    
    socketNotificationReceived(notification,payload) {
	if (notification === 'ALL_MODULES_STARTED') {
	    console.log('HI')
	}
    
});
