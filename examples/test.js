var BlueAlliance = require("../");
var tba = new BlueAlliance("53QztSBkXCtjaAgV98kdm6VyhgD0wQy30RReogRjxs8hPpsqDD6qmxFyz71WELeC");

tba.getTeam(7308).then(function(team) {
    tba.getEventsForTeam(team);
    tba.getTeamAwards(team);
});

tba.getEvent('casj', 2017).then(function(event) {
    tba.getMatch(event ,'f', 1, 1).then(function(match) {
        tba.getTeamsInMatch(match);
    });
    tba.getTeamsAtEvent(event);
    tba.getMatchesAtEvent(event);
});