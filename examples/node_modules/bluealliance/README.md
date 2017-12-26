# bluealliance

bluealliance is a node.js wrapper for TheBlueAlliance's web API thaat is optimized for scouting software.

## Installation

Open a terminal in your projects directory and type:

`npm install bluealliance`

bluealliance and it's dependencies should now be installed in your node_modules folder

## Documentation

Documentation for this wrapper can be found at http://bluealliance.readthedocs.io/en/latest/

## Example

```
var BlueAlliance = require("bluealliance");
var tba = new BlueAlliance("Your API key here");

var main = async function() {
    var result = await tba.getTeam(7308);
    console.log(result.nickname); // Prints "DeepVision"
}

main();
```