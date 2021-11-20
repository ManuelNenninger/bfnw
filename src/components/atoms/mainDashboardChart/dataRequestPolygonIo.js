import * as React from "react";
import ApiParametersSelection from "./apiParametersSelection";

export default async function test(weekdaySelection) {
  let arrayClosingValue = [];
  let arrayTimeStampValue = [];
  let metaData;

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    const apiURL = await ApiParametersSelection(weekdaySelection);
    const response = await fetch(
      apiURL,
      {
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      }
    );
    const res = await response.json();

    arrayClosingValue = res.results.map((object, index) => {
      return object.c;
    });

    arrayTimeStampValue = res.results.map((object, index) => {
      return object.t;
    });
    metaData = res.ticker;

  };
  await InitialRequestFunction();

  return {
    dataValueArray: arrayClosingValue,
    dataKeyArray: arrayTimeStampValue,
    metaData: metaData
  };
}
