/**
 * @file MMM-RacePace-Predictor.js
 *
 * @author WilliamAndrews1013
 * @license ISC
 *
 * @see  https://github.com/WilliamAndrews1013/MMM-RacePace-Predictor
 */
Module.register("MMM-RacePace-Predictor", {
    // Set the minimum MagicMirror module version
    requiresVersion: "2.20.0",
    // Default module config
    defaults: {
        
    },

    loaded: function(callback) {
		this.finishLoading();
		Log.log(this.name + ' is loaded!');
		callback();
	},

    getStyles: function(){
        return ["font-awesome.css", "MMM-Qatar2022-Groups.css"]
    },

    start() {
        Log.info(`Starting module: ${this.name}`);
        this.sendSocketNotification('CONFIG', {config: this.config})
    }

    
})