var BlueAlliance = require("../");
var tba = new BlueAlliance("53QztSBkXCtjaAgV98kdm6VyhgD0wQy30RReogRjxs8hPpsqDD6qmxFyz71WELeC");

// Ex1: getting a team from it's number
var example1 = async function() {
    var team = await tba.getTeam(254);
    console.log(team.nickname); // Prints "DeepVision"
}

// Ex2: getting teams from a match from an event
var example2 = async function() {
    var event = await tba.getEvent('casj', 2017); // SVR 2017
    var matches = await tba.getMatchesAtEvent(event);
    var teams = await tba.getTeamsInMatch(matches[12]); // 13th match
    console.log(teams.red[1].nickname); // Prints "The Funky Monkeys", playing as the second alliance member in the 13th match at SVR 2017
}

// Ex3: getting a match from event ID, year, match type, and number
var example3 = async function() {
    var event = await tba.getEvent('casj', 2017);
    var match = await tba.getMatch(event, 'f', 1, 1);
    var teams = await tba.getTeamsInMatch(match);
    console.log(teams.blue[2].nickname); // Prints "The Subatomic Smarticles"
}

example1();
example2();
example3();