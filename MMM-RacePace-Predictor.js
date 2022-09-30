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
        client_id: "",
		client_secret: "",
		mode: "table", // Possible values "table", "chart"
		chartType: "bar", // Possible values "bar", "radial"
		activities: ["run"], // Only looking for running activities
		period: "recent", // Possible values "recent", "ytd", "all"
		stats: ["distance", "moivng_time"], // Possible values "count", "distance", "elevation", "moving_time", "elapsed_time", "achievements"
		auto_rotate: false, // Rotate stats through each period starting from specified period
		locale: config.language,
		units: config.units,
		reloadInterval: 5 * 60 * 1000, // every 5 minutes
		updateInterval: 10 * 1000, // 10 seconds
		animationSpeed: 2.5 * 1000, // 2.5 seconds
		debug: false, // Set to true to enable extending logging
		digits: 1, // digits for distance and elevation
		firstYear: new Date().getFullYear() - 4 // first year to group activities by in chart mode when the period is 'all'
    },

    loading: true,

    getStyles: function(){
        return ["font-awesome.css", "MMM-RacePace-Predictor.css"]
    },

    
})