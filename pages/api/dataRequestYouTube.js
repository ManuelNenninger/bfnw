import * as React from "react";

export default function dataRequestYouTube(req, res) {

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    const apiURL = (req.body + "&key=" + process.env.YOUTUBE_API_KEY);
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


    const resJson = await response.json();
    res.send(resJson);
  };

  return InitialRequestFunction();
}
