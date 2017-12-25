var BlueAlliance = require("../bluealliance/src/bluealliance.js");
var tba = new BlueAlliance("53QztSBkXCtjaAgV98kdm6VyhgD0wQy30RReogRjxs8hPpsqDD6qmxFyz71WELeC");

var main = async function() {
    var result = await tba.getTeam(7308);
    console.log(result.nickname); // Prints "DeepVision"
}

main();