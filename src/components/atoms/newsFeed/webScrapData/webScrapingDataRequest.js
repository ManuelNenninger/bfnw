import * as React from "react";


export default async function webScrapDataRequest() {

  const InitialRequestFunction = async function() {
    const apiURL = "https://aktiengram.de/7-stocks-vs-wild-outdoor-aktien/";
      const response = await fetch(`api/dataRequestWebUrlScrap`, {
        body: JSON.stringify(
          apiURL
        ),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
    const res = await response.json();
  }

  return InitialRequestFunction()
}
