//https://nextjs.org/docs/messages/api-routes-body-size-limit#possible-ways-to-fix-it
//Hier wird bei Polygon eine Liste sämtlicher Ticker Symbole passend zu ihren Unternehmens Namen geladen. Am Server kannst Du dann diese mappen
//In Zukunft soll das Probleme geben, da hier mehr als 4MB geladen werden.
export default async function searchRequestPolygonIo(req, res) {
  let apiURL = ("https://api.polygon.io/v3/reference/tickers?market=stocks&active=false&sort=ticker&order=asc&limit=10000&apiKey=" + process.env.POLYGON_KEY);
  console.log("Request ist da");
  let tickerArray = []
  let resJson = {};
  let nextUrlPresent = true;

  while(nextUrlPresent === true){

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

    console.log("In der schleife");
    //Führe den Request aus
    let newResJson = await response.json();
    tickerArray = [...tickerArray, ...newResJson.results]
    if(newResJson?.next_url){
      apiURL = (newResJson.next_url + "&apiKey="  + process.env.POLYGON_KEY);

    } else {
      nextUrlPresent = false;

    }
  };


  res.send(tickerArray);
}
