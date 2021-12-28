import * as React from "react";
import ReturnUserInterests from "../../../userData/personalUserInterests";

export default async function apiParametersSelectionTwitter(props) {
  let userDataInterests = []
  const { selectedInterest } = props;
  console.log("Es ist Thema: " + selectedInterest + " ausgewählt für Twitter");
  // let userDataCryptoInterests = ["dogecoin", "doge", "bitcoin", "ethereum", "eth", "ripple", "btc", "coin", "Krypto",]
  // let userDataStocksInterests = ["stocks", "stonks", "aktien", "apple", "tesla", "gme", "gamestop", "oatly", "square", "facebook",]
  // let userDataGeneralInterests = ["inflation", "ezb", "fet", "crash", "rendite", "feature", "meta", "dividende", "ipo", "msci", "china", "sparen", "steuer", "tax"]
  // let personsOfInterest = ["elonmusk", "finanzfluss", "talerbox", "AlleAktien", "aktiengram", "justETF", "RayDalio",]
  let {userDataCryptoInterests, userDataStocksInterests, userDataGeneralInterests, personsOfInterest} = await ReturnUserInterests();

  const selectInterestArrays = {
      0: userDataCryptoInterests.concat(userDataStocksInterests).concat(userDataGeneralInterests),
      1: userDataStocksInterests,
      2: userDataCryptoInterests,
      3: userDataGeneralInterests,
  };

  //Default Parameter für Twitter
  //https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent#Optional
  let paramsTest1 = {
    "query": ["crypto (from:binance OR from:finanzfluss OR from:talerbox OR from:TradeRepublicDE OR from:Finanzwesir)"],
    "max_results": [
      "100"
    ],
    "tweet.fields": [
      "created_at",
      "author_id",
      "public_metrics",
      "lang",
      "text",
      "entities",
    ],
    "expansions": [
      "attachments.media_keys",
      "referenced_tweets.id.author_id",
      "entities.mentions.username",
    ],
    "place.fields": [
      "country",
    ],
    "user.fields": [
      "name",
      "username",
      "url",
      "profile_image_url"
    ],
    "media.fields": [
      "type",
      "preview_image_url",
      "url",
    ],
  }
  //API endpoint für Twitter API V2
  let url = new URL("https://api.twitter.com/2/tweets/search/recent");


  const parameterGenerator = async function() {
    let searchParams = new URLSearchParams(paramsTest1)
    //Hier werden die Suchbegriffe (wie z.B Crypto, Apple, etc) hinzugefügt
    const newQueryStringGenerator = function() {
      let q = "";

      //<--------- Fuege alle interests-Arrays zusammen --------->
      //Je nach dem welche selectedInterest ausgewaehlt sind, werden hier andere Arrays zusammengesetzt
      userDataInterests = selectInterestArrays[selectedInterest];

      userDataInterests.map(function(interest, index) {
        if (index === 0) {
          q += ("(" + interest + " OR ");
        } else {
          if (index === (userDataInterests.length - 1)) {
            q += (interest + ") ");
          } else {
            q += (interest + " OR ");
          }
        }
      });

      //Hier werden die Persons Of Interest (wie z.B Finanzfluss, ElonMusk, etc) hinzugefügt
      personsOfInterest.map(function(person, index) {

        if (index === 0) {
          q += ("(from:" + person + " OR ");
        } else {
          if (index === (personsOfInterest.length - 1)) {
            q += ("from:" + person + ")");
          } else {
            q += ("from:" + person + " OR ");
          }
        }

      });
      return q;
      //return "Dividende from:aktiengram"
    }
    //Erstelle den neuen query string
    //Wir zusammengebaut aus Interessen und Personen von Interessen (z.B Influencer, Blogs, etc)
    const newQueryString = await newQueryStringGenerator();
    //const newQueryString = "crypto (from:binance OR from:finanzfluss OR from:talerbox OR from:TradeRepublicDE OR from:Finanzwesir)";

    //Loesche den default query und update Ihn mit dem neuen query-String.
    searchParams.delete("query");
    searchParams.set("query", newQueryString)
    //Die neue search-URL bekommt die eben genauten searchParameter mit dem neuen query String
    url.search = searchParams.toString();
    console.log(url.href);
    return url
  }
  return (parameterGenerator());
}
