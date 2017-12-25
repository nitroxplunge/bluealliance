XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class BlueAlliance {
    constructor(authkey) {
        this.authkey = authkey;
    }

    getTeam(teamnum) {
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
        var blueteam = teams.slice(bluelen, teams.length);
        var json = "{\"blue\":[" + blueteam + "], \"red\":[" + redteam + "]}";
        return JSON.parse(json);
    }

    isMatchDone(match) {
        if (match.actual_time < new Date().getTime()) return true;
        return false;
    }

};

module.exports = BlueAlliance;