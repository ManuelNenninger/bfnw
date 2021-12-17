export default function apiParametersSelectionTwitter(props) {

  const userDataInterests = ["dogecoin", "doge", "bitcoin", "stoks", "aktie", "crypto", "etf", "inflation"]
  const personsOfInterest = ["elonmusk", "finanzfluss"]
  //Default Parameter für Twitter
  let paramsTest1 = {
    "query": ["crypto (from:binance OR from:finanzfluss OR from:talerbox OR from:TradeRepublicDE OR from:Finanzwesir)"],
    "max_results": [
      "10"
    ],
    "tweet.fields": [
      "created_at",
      "author_id",
      "public_metrics",
      "lang",
      "text",
    ],
    "expansions": [
      "attachments.media_keys",
      "referenced_tweets.id.author_id",
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
      console.log("Der neue Query string lautet: " + q);
      return q;
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
