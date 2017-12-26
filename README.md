# bluealliance

bluealliance is a node.js wrapper for TheBlueAlliance's web API thaat is optimized for scouting software.

## Installation

Open a terminal in your projects directory and type:

`npm install bluealliance`

bluealliance and it's dependencies should now be installed in your node_modules folder

## Documentation

Documentation for this wrapper can be found at http://bluealliance.readthedocs.io/en/latest/

## Examples

Example 1: Using getTeam() to get a team name.

```
  var BlueAlliance = require("bluealliance");
  var tba = new BlueAlliance("Your API key here");

  var main = async function() {
      var result = await tba.getTeam(7308);
      console.log(result.nickname); // Prints "DeepVision"
  }

  main();
```

Example 2: Using getMatchesAtEvent() and getTeamsInMatch() to get info on a specific team from a specific event and match.

```
  var BlueAlliance = require("bluealliance");
  var tba = new BlueAlliance("Your API key here");

  var main = async function() {
      var matches = await tba.getMatchesAtEvent('casj', 2017); // SVR 2017
      var teams = await tba.getTeamsInMatch(matches[12]); // 12th match
      console.log(teams.red[1].nickname); // Prints "The Funky Monkeys", playing as the second alliance member in the 12th match at SVR 2017
  }

  main();
```