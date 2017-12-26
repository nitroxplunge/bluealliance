XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class BlueAlliance {
    /**
     * @constructor
     * @param {String} authkey - Your X-TBA-Auth-Key from TheBlueAlliance.
     */
    constructor(authkey) {
        this.authkey = authkey;
    }

    /**
     * Gives team information from a team number.
     * @param {Int|String} teamnum - The FIRST team number of the team.
     * @returns {Promise<Object>} A promise containing a team object representing the team.
     * @async
     */
    async getTeam(teamnum) {
        var authkey = this.authkey;
        var teamkey = "frc" + teamnum;

        return new Promise(function(resolve, reject) {

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/team/" + teamkey);
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    /**
     * Gives information about an event.
     * @param {Int|String} eventcode - The 4 letter code for the event as specified on https://frc-events.firstinspires.org/2018/CODE.
     * @param {Int|String} [year] - The 4 digit year of the event.
     * @returns {Promise<Object>} A promise containing an event object representing the event.
     * @async
     */
    async getEvent(eventcode, year) {
        var authkey = this.authkey;
        var eventkey = year + eventcode.toString().toLowerCase();

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() { if (this.readyState === 4) resolve(JSON.parse(this.responseText)); }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/event/" + eventkey);
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    /**
     * Gives information about a match.
     * @param {Int|String} eventcode - The 4 letter code for the event as specified on https://frc-events.firstinspires.org/2018/CODE.
     * @param {Int|String} year - The 4 digit year of the event.
     * @param {String} complevel - The level of play of the match (q, ef, qf, sf, f) (qualifications, eliminations, quarter finals, semi-finals, finals)
     * @param {Int} matchnum - The number of the match in the competition level.
     * @param {Int} seminum - The number of the match in the match set.
     * @returns {Promise<Object>} A promise containing a match object representing a match.
     * @async
     */
    async getMatch(eventcode, year, complevel, matchnum, seminum) {
        var authkey = this.authkey;
        if (!seminum) seminum = "";
        var matchkey = year + eventcode.toString().toLowerCase() + "_" + complevel + seminum + "m" + matchnum;

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() { if (this.readyState === 4) resolve(JSON.parse(this.responseText)); }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/match/" + matchkey);
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    /**
     * Gives information on the rewards that a team has earned.
     * @param {Int|String} teamnum - The FIRST team number of the team.
     * @returns {Promise<Object[]>} A promise containing an array of rewards that the team has recieved.
     * @async
     */
    async getTeamAwards(teamnum) {
        var authkey = this.authkey;
        var teamkey = "frc" + teamnum;

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() { if (this.readyState === 4) resolve(JSON.parse(this.responseText)); }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/team/" + teamkey + "/awards");
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    /**
     * Gives the teams at an event.
     * @param {Int|String} eventcode - The 4 letter code for the event as specified on https://frc-events.firstinspires.org/2018/CODE.
     * @param {Int|String} [year] - The 4 digit year of the event.
     * @returns {Promise<Object[]>} A promise containing an array of teams that are at the event.
     * @async
     */
    async getTeamsAtEvent(eventcode, year) {
        var authkey = this.authkey;
        var eventkey = year + eventcode.toString().toLowerCase();

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() { if (this.readyState === 4) resolve(JSON.parse(this.responseText)); }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/event/" + eventkey + "/teams");
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    /**
     * Gives the events that a team has or will attend.
     * @param {Int|String} teamnum - The FIRST team number of the team.
     * @returns {Promise<Object[]>} A promise containing the events the team has or will attend.
     * @async
     */
    async getEventsForTeam(teamnum) {
        var authkey = this.authkey;
        var teamkey = "frc" + teamnum;

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() { if (this.readyState === 4) resolve(JSON.parse(this.responseText)); }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/team/" + teamkey + "/events");
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    /**
     * Gives the matches at an event.
     * @param {Int|String} eventcode - The 4 letter code for the event as specified on https://frc-events.firstinspires.org/2018/CODE.
     * @param {Int|String} [year] - The 4 digit year of the event.
     * @returns {Promise<Object[]>} A promise containing an array of matches at the event.
     * @async
     */
    async getMatchesAtEvent(eventcode, year) {
        var authkey = this.authkey;
        var eventkey = year + eventcode.toLowerCase();

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() { if (this.readyState === 4) resolve(JSON.parse(this.responseText)); }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/event/" + eventkey + "/matches");
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    /**
     * Gives the teams in a match.
     * @param {Object} match - A match.
     * @returns {Object[]} An array of the teams in the match.
     * @async
     */
    async getTeamsInMatch(match) {
        var teams = [];
        var bluelen = match.alliances.blue.team_keys.length;

        teams.push(match.alliances.blue.team_keys);
        teams.push.apply(match.alliances.blue.team_keys, match.alliances.red.team_keys);
        teams = teams[0];

        for (var i = 0; i < teams.length; i++) {
            var obj = await this.getTeam(teams[i].substring(3));
            teams[i] = JSON.stringify(obj);
        }

        var redteam = teams.slice(bluelen);
        var blueteam = teams.slice(0, bluelen);
        var json = "{\"blue\":[" + blueteam + "], \"red\":[" + redteam + "]}";
        return JSON.parse(json);
    }

    /**
     * Tells wether or not a match has concluded.
     * @param {Object} match - A match.
     * @returns {Boolean} Wether or not a match has concluded.
     */
    isMatchDone(match) {
        if (match.actual_time < new Date().getTime()) return true;
        return false;
    }

};

module.exports = BlueAlliance;