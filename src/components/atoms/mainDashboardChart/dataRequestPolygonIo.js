import * as React from "react";
import ApiParametersSelection from "./apiParametersSelection";

//<-------- Fetch Funktion, um das Ticker Symbol zum jeweiligen Company Name mappen-------->
//<--------Hinweis: Da der Search Request zeitintensiv ist, wird hier eine Memoisation-Funiton verwendet-------->
//z.B Nachlesen: https://www.interviewbit.com/javascript-interview-questions/#currying-javascript Frage 17
//Hinweis: Wenn Du es in den Body der export default function machst, wird die funktion bei jedem call neu initialisiert, was den cache auch auf neue erstellen wuerde....
function companyNameRequest(ticker) {
  var cache = {};

  return async function(ticker) {
    if (ticker in cache) {
      //console.log("cached value");
      return cache[ticker]

    } else {
      //console.log("New request. No cached value");
      let companyName;
      const searchURL = await "https://api.polygon.io/v3/reference/tickers?ticker=" + ticker + "&active=true&sort=ticker&order=desc&limit=10&apiKey=";
      const response = await fetch(`api/searchRequestPolygonIo`, {
        body: JSON.stringify(
          searchURL
        ),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      const res = await response.json();
      if (res?.results[0]?.name) {
        companyName = (res.results[0].name);
      } else {
        companyName = ("Symbol:  " + ticker);
      }

      cache[ticker] = companyName;
      return cache[ticker];
    }
  }
}
let companyNameRequestCached = companyNameRequest();

export default async function test({weekdaySelection, searchContent}) {
  let arrayClosingValue = [];
  let arrayTimeStampValue = [];
  let metaData;

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    const apiURL = await ApiParametersSelection({weekdaySelection: weekdaySelection, searchContent: searchContent});
    const response = await fetch(`api/dataRequestPolygonIo`, {
          body: JSON.stringify(
            apiURL
          ),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      );
    const res = await response.json();

    arrayClosingValue = res.results.map((object, index) => {
      return object.c;
    });

    arrayTimeStampValue = res.results.map((object, index) => {
      return object.t;
    });
    metaData = {ticker: res.ticker, companyName: await companyNameRequestCached(res.ticker)}

  };

  await InitialRequestFunction();

  return {
    dataValueArray: arrayClosingValue,
    dataKeyArray: arrayTimeStampValue,
    metaData: metaData
  };
}
