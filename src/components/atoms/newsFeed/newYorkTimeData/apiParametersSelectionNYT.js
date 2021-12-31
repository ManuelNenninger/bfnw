import * as React from "react";
import ReturnUserInterests from "../../../userData/personalUserInterests";

export default async function apiParametersSelectionNYT(props) {
  let userDataInterests = []
  const { selectedInterest } = props;

  // let userDataCryptoInterests = ["dogecoin", "doge", "bitcoin", "ethereum", "eth", "ripple", "btc", "coin", "Krypto",]
  // let userDataStocksInterests = ["stocks", "stonks", "aktien", "apple", "tesla", "gme", "gamestop", "oatly", "square", "facebook", "finance", "meta"]
  // let userDataGeneralInterests = ["inflation", "ezb", "fet", "crash", "rendite", "feature", "meta", "dividende", "ipo", "msci", "china"]
  // let personsOfInterest = ["elonmusk", "finanzfluss", "talerbox", "AlleAktien", "aktiengram", "justETF",] //Wird hier bei NT-API nicht verwendet

  const {userDataCryptoInterests, userDataStocksInterests, userDataGeneralInterests} = await ReturnUserInterests();

  const selectInterestArrays = {
      0: userDataCryptoInterests.concat(userDataStocksInterests).concat(userDataGeneralInterests),
      1: userDataStocksInterests,
      2: userDataCryptoInterests,
      3: userDataGeneralInterests,
  };

  let todayDate = new Date().toISOString().slice(0, 10);
  function getPastDate(pastDays){
    const unixTimestampFiveDays = new Date().setDate(new Date().getDate() -pastDays);
    const pastDate = new Date(unixTimestampFiveDays).toISOString().slice(0, 10)
    return (pastDate);
  }
  let pastDay = getPastDate(60);

  //https://developer.nytimes.com/docs/articlesearch-product/1/overview
  //Such in allen artikeln (q="") und Filtere diese nach den user-Interests.
  let paramsTest1 = {
    "q": [
      //"finance"
    ],
    "begin_date": [
      pastDay.toString(),
    ],
    "end_date": [
      todayDate.toString(),
    ],
    "sort": [
      "newest",
    ],
    "page": [
      "5",
    ],
    "fq": [
      "headline:(dogecoin krypto bitcoin eth ripple meta ipo china fet inflation btc stock stonks)"
    ],
  }
  //API endpoint für Twitter API V2
  let url = new URL("https://api.nytimes.com/svc/search/v2/articlesearch.json?");


  const parameterGenerator = async function() {
    let searchParams = new URLSearchParams(paramsTest1)

    //Hier werden die Suchbegriffe (wie z.B Crypto, Apple, etc) hinzugefügt
    const newQueryStringGenerator = function() {
      let fq = "";

      //<--------- Fuege alle interests-Arrays zusammen --------->
      //Je nach dem welche selectedInterest ausgewaehlt sind, werden hier andere Arrays zusammengesetzt
      userDataInterests = selectInterestArrays[selectedInterest];

      //<--------- Gestalte den Filter-Query-String. Er ist speziell für NYT-API und beinhaltet die Ineressen des Users (userDataCryptoInterests, userDataStocksInterests, etc. ) --------->
      userDataInterests.map(function(interest, index) {
        if (index === 0) {
          fq += ("headline:(" + interest + " ");
        } else {
          if (index === (userDataInterests.length - 1)) {
            fq += (interest + ")");
          } else {
            fq += (interest + " ");
          }
        }
      });
      return fq;
    }
    //Erstelle den neuen filter-query string, der auf den Interessen des User besteht
    let newQueryString = await newQueryStringGenerator();
    //Für diese API muss der verknuepfungs Operator ein AND sein
    newQueryString = newQueryString.replaceAll("+", "AND");

    //Loesche den default filter-query (fq) und update Ihn mit dem neuen query-String.
    searchParams.delete("fq");
    searchParams.set("fq", newQueryString)
    //Die neue search-URL bekommt die eben genauten searchParameter mit dem neuen query String
    url.search = searchParams.toString();
    return url
  }
  return(parameterGenerator());
}
