import * as React from "react";
import ApiParametersSelectionTwitter from "./apiParametersSelectionTwitter";

export default async function test(url, props) {
  let dataResponseArray = [];

  //<----- Falls keine media Datei vorhanden ist aber der Tweet ein Link hat welcher wiederum Media zeigt
  //Soll hier die Image-URL des Links für imageUrl genommen werden ----->
  const setImageURLFromText = function(dataObject){
    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    //Wenn das nested-Object (API Response) ein image URL besitzt, verwende es
    if(dataObject.entities?.urls?.[0].images?.[0].url != null){
      return (dataObject.entities.urls[0].images[0].url);
    }else {
      return false;
    }
  }

  //<-------- Fetch Funktion, um Daten zu bekommen -------->
  const InitialRequestFunction = async (event) => {
    const apiURL = await ApiParametersSelectionTwitter(props);
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
    //console.log(res);
    res.data.map(function(dataObject, index) {
      const headline = dataObject.text;
      const entitiesForText = dataObject.entities != null ? dataObject.entities : false;
      const contentText = dataObject.author_id;
      const source = "Twitter";
      const publisherDate = dataObject.created_at;
      const imageUrl = dataObject.attachments == null ? setImageURLFromText(dataObject) : dataObject.attachments.media_keys[0];
      const linkToArticle = "";

      //Hier wird das dataResponseArray destrukturiert.
      //Aufgrund der Twitter Response sind hier Werte wie username (contentText) noch nicht richtig
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
    //Hier wird ueber Users-Feld der Twitter-Response der passende Name der author_id zugewiesen.
    res.includes.users.map(function(object, index) {
      dataResponseArray.find((o, i) => {
        if (o.contentData.contentText === object.id) {
          //ersetze die author_id durch den Usernamen
          dataResponseArray[i].contentData.contentText = ("from @" + object.username);
          //Die source ist die twitter Origin mit /username
          dataResponseArray[i].contentData.linkToArticle = ("https://twitter.com/" + object.username);
          //return true; // stop searching
        }
      });
    });
    //Wenn ein media_key und somit Media Daten vorhanden sind, weise entsprechend die URL zu.
    if (res.includes.media) {
      res.includes.media.map(function(object, index) {
        dataResponseArray.find((o, i) => {
          if (o.contentData.imageUrl === object.media_key) {
            //ersetze den media_key durch die URL zur Media, wenn ein url vorhanden ist
            if(object.url){
              dataResponseArray[i].contentData.imageUrl = object.url;
            }
            //ersetze den media_key durch die preview_image_url zur Media, wenn ein preview_image_url vorhanden ist
            if(object.preview_image_url){
              dataResponseArray[i].contentData.imageUrl = object.preview_image_url;
            }
            //return true; // stop searching
          }
        });
      });
    }
    return dataResponseArray;
  };

  return InitialRequestFunction();
}
