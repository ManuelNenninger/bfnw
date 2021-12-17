import * as React from "react";

export default function dataRequestTwitter(req, res) {

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    const token = process.env.TWITTER_BEARE_TOKEN;
    const apiURL = (req.body);
    const response = await fetch(
      apiURL, {
        body: JSON.stringify(),
        headers: {
          //"Content-Type": "application/json",
          "User-Agent": "v2RecentSearchJS",
          "authorization": `Bearer ${token}`
        },
        method: "GET"
      }
    );


    const resJson = await response.json();
    res.send(resJson);
  };
  /*res.response.docs.map(function (article, index) {
      const headline = article.headline.main;
      const contentText = article.lead_paragraph;
      const source = article.source;
      const publisherDate = article.pub_date;
      const imageUrl = article.multimedia[5];
      const linkToArticle = article.web_url;

      dataResponseArray.push({
        articleIndex: index,
        contentData: {
          headline: headline,
          contentText: contentText,
          source: source,
          publisherDate: publisherDate,
          imageUrl:
            imageUrl == null
              ? "https://electrek.co/wp-content/uploads/sites/3/2021/06/Tesla-Model-S-Plaid-news-hub.png"
              : "https://www.nytimes.com/" + imageUrl.url,
          linkToArticle: linkToArticle
        }
      });
    });

    return res;
  };*/

  return InitialRequestFunction();
}
