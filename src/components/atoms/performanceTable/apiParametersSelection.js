import * as React from "react";

export default function apiParametersSelection({kategorie}){


  const gainerParameter = function(){

    return ("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=");
  }
  const loserParameter = function(){

    return ("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=");
  }
  const defaultOne = function(){

    return ("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=");
  }
  const defaultTwo = function(){

    return ("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=");
  }

  const apiParametersSelection = {
    "10": gainerParameter,
    "20": loserParameter,
    "30": defaultOne,
    "40": defaultTwo,
  };

  return (apiParametersSelection[kategorie]());
}
