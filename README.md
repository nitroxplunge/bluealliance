# bluealliance

bluealliance is a node.js wrapper for TheBlueAlliance's web API thaat is optimized for scouting software.

## Installation

Open a terminal in your projects directory and type:
`npm install bluealliance`

## Docs

Documentation for this wrapper can be found at: 

## Example

```
var BlueAlliance = require("../bluealliance/src/bluealliance.js");
var tba = new BlueAlliance("53QztSBkXCtjaAgV98kdm6VyhgD0wQy30RReogRjxs8hPpsqDD6qmxFyz71WELeC");

var main = async function() {
    var result = await tba.getTeam(7308);
    console.log(result.nickname); // Prints "DeepVision"
}

main();
```