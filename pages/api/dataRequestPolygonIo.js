// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Hier wird vom Client der URL uebergeben, mit allen vom User ausgewaehlten apiParametersSelection
//Anschließend wird hier der API Key ergaenzt und der Request vom Server aus an den Polygon.io Server gemacht.
//Die Response wird an den Client zurück gesendet.
//Kein CORS, da Client URL und Server URL von der gleichen Domain sind. Und Server zu Server kein CORS Handeln
export default async function dataRequestPolygonIo(req, res) {
  const apiURL = (req.body + process.env.POLYGON_KEY);
  // const apiURL = (req.body);
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
}
