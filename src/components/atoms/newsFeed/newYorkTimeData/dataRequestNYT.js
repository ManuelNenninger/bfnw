import * as React from "react";

export default async function test() {
  let dataResponseArray = [];

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    const apiURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20211201&end_date=20211206&q=Tesla&sort=relevance&api-key=";
    const response = await fetch(`api/dataRequestNYT`, {
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
    res.response.docs.map(function(article, index) {
      const headline = article.headline.main;
      const contentText= article.lead_paragraph;
      const source = article.source;
      const publisherDate = article.pub_date;
      const imageUrl = article.multimedia[5];
      const linkToArticle = article.web_url;

      dataResponseArray.push(
        {
          articleIndex: index,
            contentData: {
              headline: headline,
              contentText: contentText,
              source: source,
              publisherDate: publisherDate,
              imageUrl: imageUrl == null ? "https://electrek.co/wp-content/uploads/sites/3/2021/06/Tesla-Model-S-Plaid-news-hub.png" : "https://www.nytimes.com/" + imageUrl.url ,
              linkToArticle: linkToArticle,
            }
        }
      );
    })
    return dataResponseArray;
  };

  return InitialRequestFunction();
}
