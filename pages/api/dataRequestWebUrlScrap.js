import * as React from "react";
const cheerio = require('cheerio');

export default async function dataRequestWebUrlScrap(req, res) {

//Creating a function which will return the first thing it finds
// We can now change the value of title, img and description of our metaTagData object
// to the getMetaTag function and pass it a the meta tag name as a string.
  const GetMetaRag = (name) => {
    return (
      $(`meta[name=${name}]`).attr('content') ||
      $(`meta[name="og:${name}"]`).attr('content') ||
      $(`meta[name="twitter:${name}"]`).attr('content') ||
      $(`meta[property=${name}]`).attr('content') ||
      $(`meta[property="og:${name}"]`).attr('content') ||
      $(`meta[property="twitter:${name}"]`).attr('content')
    );
  }

  const apiURL = (req.body);
  // const apiURL = (req.body);
  const response = await fetch(
    apiURL, {
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  );
  const html = await response.text();
  //https://www.npmjs.com/package/cheerio
  const $ = cheerio.load(html);

  const metaTagData = {
    //id:id,
    url: apiURL,
    domain: apiURL,
    title: GetMetaRag('title') || $(`h1`).text(),
    img: GetMetaRag('image') || false,
    description: GetMetaRag('description') || $(`p`).text(),
  }
  //Wenn die description weniger als 200 Buchstaben sein soll
  let {
    description
  } = metaTagData;
  if (description.length > 200) {
    metaTagData.description = description.substring(0, 200) + '...';
  }

  res.send(metaTagData);
}
