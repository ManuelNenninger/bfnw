import * as React from "react";
import ApiParametersSelection from "./apiParametersSelection";

export default async function test(url, kategorie) {
function createData(icon, assetName, closePrice, interest, tickerSymbol) {
  return { icon, assetName, closePrice, interest, tickerSymbol };
}

let responseRows = []

  //<-------- Fetch Funktion, um das Ticker Symbol zum jeweiligen Company Name mappen-------->
  const companyNameRequest = async (ticker) => {
    const searchURL = await "https://api.polygon.io/v3/reference/tickers?search=" + ticker.ticker + "&active=true&sort=ticker&order=desc&limit=10&apiKey=";
    const response = await fetch(`api/searchRequestPolygonIo`, {
          body: JSON.stringify(
            searchURL
          ),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      );
    const res = await response.json();
    if(res?.results[0]?.name){
      return(res.results[0].name);
    }else{
      return ("Symbol:  "+ ticker.ticker);
    }
  }

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    const apiURL  = await ApiParametersSelection({kategorie})
    const response = await fetch(`api/snapshotRequestPolygonIo`, {
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

    responseRows = await Promise.all(res.tickers.map(async function(ticker, index){
      let companyName = await companyNameRequest(ticker)
      return createData("FacebookIcon", companyName, ticker.day.c.toFixed(3), ticker.todaysChangePerc.toFixed(3), ticker.ticker);
    }));
  };

await InitialRequestFunction();

return responseRows;

}
