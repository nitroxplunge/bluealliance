# bluealliance

[![npm](https://img.shields.io/npm/v/bluealliance.svg)](https://www.npmjs.com/package/bluealliance)
[![docs](https://img.shields.io/website-v0.8.7-down-green-red/http/7308deepvision.com/bluealliance.svg?label=documentation)](http://7308deepvision.com/bluealliance)
[![npm](https://img.shields.io/npm/dt/bluealliance.svg)](https://www.npmjs.com/package/bluealliance)
[![Build Status](https://travis-ci.org/nitroxplunge/bluealliance.svg?branch=master)](https://travis-ci.org/nitroxplunge/bluealliance)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/nitroxplunge/bluealliance.svg)](https://github.com/nitroxplunge/bluealliance)
[![npm](https://img.shields.io/npm/l/bluealliance.svg)](https://www.npmjs.com/package/bluealliance)

[![NPM](https://nodei.co/npm/bluealliance.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bluealliance/)

bluealliance is a node.js wrapper for The Blue Alliance's web api that is optimized for scouting software.

## Installation

Open a terminal in your projects directory and type:

`npm install bluealliance`

bluealliance and it's dependencies should now be installed in your node_modules folder

## Documentation

Documentation for this wrapper can be found at http://7308deep.vision/bluealliance

## Examples

### Example 1: Using `getTeam()` to get a team name.

```
  var BlueAlliance = require("bluealliance");
  var tba = new BlueAlliance("Your API key here");

  var main = async function() {
      var team = await tba.getTeam(7308);
      console.log(team.nickname); // Prints "DeepVision"
  }

  main();
```

### Example 2: Using `getMatchesAtEvent()` and `getTeamsInMatch()` to get info on a specific team from a specific event and match.

```
  var BlueAlliance = require("bluealliance");
  var tba = new BlueAlliance("Your API key here");

  var main = async function() {
      var event = await tba.getEvent('casj', 2017); // SVR 2017
      var matches = await tba.getMatchesAtEvent(event);
      var teams = await tba.getTeamsInMatch(matches[12]); // 12th match
      console.log(teams.red[1].nickname); // Prints "The Funky Monkeys", playing as the second alliance member in the 12th match at SVR 2017
  }

  main();
```
