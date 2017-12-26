var BlueAlliance = require("bluealliance");
var tba = new BlueAlliance("53QztSBkXCtjaAgV98kdm6VyhgD0wQy30RReogRjxs8hPpsqDD6qmxFyz71WELeC");

var example1 = async function() {
    var result = await tba.getTeam(7308);
    console.log(result.nickname); // Prints "DeepVision"
}

var example2 = async function() {
    var matches = await tba.getMatchesAtEvent('casj', 2017); // SVR 2017
    var teams = await tba.getTeamsInMatch(matches[12]); // 12th match
    console.log(teams.red[1].nickname); // Prints "The Funky Monkeys", playing as the second alliance member in the 12th match at SVR 2017
}

example1();
example2();