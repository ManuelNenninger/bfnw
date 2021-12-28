export default async function searchRequestNYT(req, res) {
  const apiURL = (req.body + "&api-key=" + process.env.NYT_KEY);
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
