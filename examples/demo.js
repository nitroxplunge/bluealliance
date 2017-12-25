var BlueAlliance = require("../bluealliance/src/bluealliance.js");
var tba = new BlueAlliance("53QztSBkXCtjaAgV98kdm6VyhgD0wQy30RReogRjxs8hPpsqDD6qmxFyz71WELeC");

tba.getMatchesAtEvent('casj', 2017).then(function (result) {
    console.log(tba.getTeamNumsInMatch(result[0]));
});