const fetch = require('node-fetch');
const qs = require('querystring');
const NodeHelper = require('node_helper');

const BASE_URL = 'http://api.cup2022.ir/api/v1';

/**
 * Derived group details from API endpoint for easier usage.
 *
 * @typedef {object} Groups
 * @property {string} group_id - Group identifier
 * @property {string} _id - Each groups _id
 */

/**
 * @typedef {object} Team
 * @property {number} team_id - Team identifier.
 * @property {string} name - Full team name.
 * @property {number} matches_played - Amout of matches played
 * @property {number} wins - Amount of wins
 * @property {number} losses - Amount of losses
 * @property {number} points - Amount of total points
 */

/**
 * @module node_helper
 * @description Backend for the module to query data from the API provider.
 *
 * @requires external:node-fetch
 * @requires external:querystring
 * @requires external:node_helper
 */
module.exports = NodeHelper.create({

    /** @member {string} requiresVersion - Defines the minimum version of MagicMirror² to run this node_helper. */
    requiresVersion: '2.20.0',

    /**
     * @function socketNotificationReceived
     * @description Receives socket notifications from the module.
     * @async
     * @override
     *
     * @param {string} notification - Notification name
     * @param {*} payload - Detailed payload of the notification.
     *
     * @returns {void}
     */
    async socketNotificationReceived(notification, payload) {
        if (notification === 'CONFIG') {
            this.config = payload.config;

            await this.initGroups();
        }
    },

     /**
     * @function initTeams
     * @description Retrieves a list of all teams from the API and initializes teamMapping.
     * @async
     *
     * @returns {void}
     */
    async initGroups() {
        const data = await fetch(`${BASE_URL}/standings`, {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU4MGYzZWU2ODcyYWJmZTNiMGY5OWQiLCJpYXQiOjE2NjcyMzUxMzIsImV4cCI6MTY2NzMyMTUzMn0.6ZEPdApzNNyZk_esLOBzzWT1lXE7kFFk0Evmxr6blLY'
            }
        });

        if (!response.ok) {
            Log.error(`Initializing Groups failed: ${response.status} ${response.statusText}`);

            return;
        }

        

        const groupA = data.filter((item) => {
            return item.group === "A";
        });

        const groupB = data.filter((item) => {
            return item.group === "B";
        });

        const groupC = data.filter((item) => {
            return item.group === "C";
        });

        const groupD = data.filter((item) => {
            return item.group === "D";
        });

        const groupE = data.filter((item) => {
            return item.group === "E";
        });

        const groupF = data.filter((item) => {
            return item.group === "F";
        });

        const groupG = data.filter((item) => {
            return item.group === "G";
        });

        const groupH = data.filter((item) => {
            return item.group === "H";
        });

        return [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH];
    },

    async fetchData() {
        const response = await fetch(`${BASE_URL}/standings`, {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU4MGYzZWU2ODcyYWJmZTNiMGY5OWQiLCJpYXQiOjE2NjcyMzUxMzIsImV4cCI6MTY2NzMyMTUzMn0.6ZEPdApzNNyZk_esLOBzzWT1lXE7kFFk0Evmxr6blLY'
            }
        });

        console.log(response);
    }
});