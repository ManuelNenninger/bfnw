import * as React from "react";
import ApiParametersSelectionYouTube from "./apiParametersSelectionYouTube"

//<----- Falls keine media Datei vorhanden ist aber der Tweet ein Link hat welcher wiederum Media zeigt
//Soll hier die Image-URL des Links für imageUrl genommen werden ----->
const setImageURLFromText = function(dataObject){
  //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  //Wenn das nested-Object (API Response) ein image URL besitzt, verwende es
  if(dataObject?.snippet?.thumbnails?.high != null){
    return (dataObject.snippet.thumbnails.high.url);
  }else {
    if(dataObject?.snippet?.thumbnails?.medium != null){
      return (dataObject.snippet.thumbnails.medium.url);
    } else {
      if(dataObject?.snippet?.thumbnails?.default != null){
        return (dataObject.snippet.thumbnails.default.url);
      } else {
        return false;
      }
    }
  }
}

export default async function test(url, props) {
  let dataResponseArray = [];
  let channelsIdsOfInterest = ["UCSzAsgKDpNkch1eRA9w5nww", "UCeARcCUiZg79SQQ-2_XNlXQ", "UCyCBf6asf89aQJaSXuAuTsg", "UCpV9LpCg4uwYCQZ3qoEn_YQ", "UC12m4RfCDXSa9VKEZOHwiUA"]


  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    channelsIdsOfInterest.map(async function(channelid, i){
      //console.log("Der Channel von " + channelid + " mit index " + i + "wird gemacht");
      const apiURL = await ApiParametersSelectionYouTube(props, channelid);
      const response = await fetch(url, {
        body: JSON.stringify(
          apiURL.href
        ),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      const res = await response.json();

      res.items.map(function(dataObject, index) {
        const headline = dataObject.snippet.title;
        const entitiesForText = false;
        const contentText = "from @" + dataObject.snippet.channelTitle;
        const source = "YouTube";
        const publisherDate = dataObject.snippet.publishedAt;
        const imageUrl = setImageURLFromText(dataObject);
        const linkToArticle = "https://www.youtube.com/watch?v=" + dataObject.id.videoId;

        //Hier wird das dataResponseArray destrukturiert.
        dataResponseArray.push({
          articleIndex: index,
          contentData: {
            headline: headline,
            entitiesForText: entitiesForText,
            contentText: contentText,
            source: source,
            publisherDate: publisherDate,
            imageUrl: imageUrl,
            linkToArticle: linkToArticle,
          }
        });
      });
    })

    return dataResponseArray;
  };

  return InitialRequestFunction();
}
