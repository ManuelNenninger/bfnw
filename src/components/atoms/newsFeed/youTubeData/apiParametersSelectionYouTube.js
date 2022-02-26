import * as React from "react";
import ReturnUserInterests from "../../../userData/personalUserInterests";

export default async function apiParametersSelectionYouTube(props, channelid) {
  let userDataInterests = []
  const { selectedInterest } = props;
  let {userDataCryptoInterests, userDataStocksInterests, userDataGeneralInterests,} = await ReturnUserInterests();

  const selectInterestArrays = {
      0: userDataCryptoInterests.concat(userDataStocksInterests).concat(userDataGeneralInterests),
      1: userDataStocksInterests,
      2: userDataCryptoInterests,
      3: userDataGeneralInterests,
  };

  function getPastDate(pastDays){
    const unixTimestampFiveDays = new Date().setDate(new Date().getDate() -pastDays);
    const pastDate = new Date(unixTimestampFiveDays).toISOString();
    return (pastDate);
  }
  let pastDay = getPastDate(7);

  //Default Parameter für YotTube
  //https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22channelId%22%3A%22UCSzAsgKDpNkch1eRA9w5nww%22%2C%22publishedAfter%22%3A%222022-02-10T17%3A20%3A38%2B00%3A00%22%2C%22q%22%3A%22bitcoin%20%7C%20Web3.0%22%2C%22type%22%3A%5B%22video%22%5D%7D&apix=true
  let paramsTest1 = {
    "q": [""],
    "part": [
      "snippet"
    ],
    "maxResults": [
      "5"
    ],
    "publishedAfter": [
      pastDay
    ],
    "channelId":[
      channelid
    ],
    "type": [
      "video"
    ]
  }
  //API endpoint für Twitter API V2
  let url = new URL("https://www.googleapis.com/youtube/v3/search");


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
          q += (interest + " | ");
        } else {
          if (index === (userDataInterests.length - 1)) {
            q += (interest);
          } else {
            q += (interest + " | ");
          }
        }
      });
      return q;
      //return "bitcoin"
    }
    //Erstelle den neuen query string
    //Wir zusammengebaut aus Interessen und Personen von Interessen (z.B Influencer, Blogs, etc)
    let newQueryString = await newQueryStringGenerator();
    //newQueryString = newQueryString.replaceAll("+", "");

    //Loesche den default query und update Ihn mit dem neuen query-String.
    searchParams.delete("q");
    searchParams.set("q", newQueryString)
    //Die neue search-URL bekommt die eben genauten searchParameter mit dem neuen query String
    url.search = searchParams.toString();
    return url;
  }
  return (parameterGenerator());
}
