export default async function searchRequestPolygonIo(req, res) {
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
