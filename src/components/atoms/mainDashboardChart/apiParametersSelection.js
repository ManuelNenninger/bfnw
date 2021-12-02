import * as React from "react";

export default function apiParametersSelection({weekdaySelection, searchContent}){
  let stocksTicker = "";
  let multiplier = "";
  let timeSPan = "";
  let from = "";
  let to = new Date().toISOString().slice(0, 10); //yyyy-mm-dd
  let apiKey = "LI2p_tatfEoXfGglGO3laLcjtwwEqRdy" //"LI2p_tatfEoXfGglGO3laLcjtwwEqRdy";
  function getPastDate(pastDays){
    const unixTimestampFiveDays = new Date().setDate(new Date().getDate() -pastDays);
    const pastDate = new Date(unixTimestampFiveDays).toISOString().slice(0, 10)
    return (pastDate);
  }

  const intradayParameter = function(){
    //Hier sollte die Websocket verbindung aufgebaut werden.
    from = getPastDate(1);
    multiplier = "5";
    timeSPan = "minute";
    return ("https://api.polygon.io/v2/aggs/ticker/" + searchContent + "/range/" + multiplier + "/" + timeSPan + "/" + from + "/" + to + "?adjusted=true&sort=asc&limit=5000&apiKey=");
  }
  const weekParameter = function(){
    from = getPastDate(5);
    multiplier = "30";
    timeSPan = "minute";
    return ("https://api.polygon.io/v2/aggs/ticker/" + searchContent + "/range/" + multiplier + "/" + timeSPan + "/" + from + "/" + to + "?adjusted=true&sort=asc&limit=5000&apiKey=");
  }
  const monthParameter = function(){
    from = getPastDate(31);
    multiplier = "1";
    timeSPan = "day";
    return ("https://api.polygon.io/v2/aggs/ticker/" + searchContent + "/range/" + multiplier + "/" + timeSPan + "/" + from + "/" + to + "?adjusted=true&sort=asc&limit=5000&apiKey=");
  }
  const maxParameter = function(){
    from = getPastDate((365*2));
    multiplier = "7";
    timeSPan = "day";
    return ("https://api.polygon.io/v2/aggs/ticker/" + searchContent + "/range/" + multiplier + "/" + timeSPan + "/" + from + "/" + to + "?adjusted=true&sort=asc&limit=5000&apiKey=");
  }

  const apiParametersSelection = {
    "intraday": intradayParameter,
    "week": weekParameter,
    "month": monthParameter,
    "max": maxParameter,
  };

  return (apiParametersSelection[weekdaySelection]());
}
