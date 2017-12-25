XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class BlueAlliance {
    constructor(authkey) {
        this.authkey = authkey;
        this.out = "";
    }

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

    getTeamAwards(teamnum) {
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

    getTeamsAtEvent(eventcode, year) {
        var authkey = this.authkey;
        var eventkey = year + eventcode.toLowerCase();

        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() { if (this.readyState === 4) resolve(JSON.parse(this.responseText)); }

            xhr.open("GET", "https://www.thebluealliance.com/api/v3/event/" + eventkey + "/teams");
            xhr.setRequestHeader("X-TBA-Auth-Key", authkey);
            xhr.send();
        });
    }

    getEventsForTeam(teamnum) {
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

    getMatchesAtEvent(eventcode, year) {
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

    getTeamNumsInMatch(match) {
        var authkey = this.authkey;
        var teamnums = "{\"blue\":[" + match.alliances.blue.team_keys + "],\"red\":[" + match.alliances.red.team_keys + "]}";
        console.log(teamnums);
        return JSON.parse(teamnums);
    }

};

module.exports = BlueAlliance;