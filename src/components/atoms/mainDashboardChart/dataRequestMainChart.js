import * as React from 'react';




export default async function test(){
  let dataValueArray = [];
  let dataKeyArray = [];
  let metaData;

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async event => {

    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`, {
      body: JSON.stringify(

      ),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    });
    const res = await response.json();
    //aufteilung in Meta-Werte und Time-Werte
    metaData = Object.values(res).[0];
    const TimeData = Object.values(res).[1];
    //Zuweisen aller Value des Objects. Also open-Werte
    Object.values(TimeData).map(function(currentObject) {
      dataValueArray.push(currentObject["1. open"]);
    });
    //Zuweisen aller Keys (Namen) des Objects. Also Time Daten
    dataKeyArray = Object.keys(TimeData);
  }

  await InitialRequestFunction();
  return {
    dataValueArray: dataValueArray,
    dataKeyArray: dataKeyArray,
    metaData: metaData
  }
}
