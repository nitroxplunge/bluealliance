var BlueAlliance = require("../");
var tba = new BlueAlliance("53QztSBkXCtjaAgV98kdm6VyhgD0wQy30RReogRjxs8hPpsqDD6qmxFyz71WELeC");

tba.getTeam(7308);
tba.getTeamAwards(7308);
tba.getTeamsAtEvent('casj', 2017);
tba.getEventsForTeam(7308);
tba.getMatchesAtEvent('casj', 2017);
tba.getTeamsInMatch(tba.getMatchesAtEvent('casj', 2017)[0]);
tba.isMatchDone(tba.getMatchesAtEvent('casj', 2017)[0]);