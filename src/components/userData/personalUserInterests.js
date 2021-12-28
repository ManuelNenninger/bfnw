


export default function returnUserInterests (){

  let userDataCryptoInterests = ["dogecoin", "doge", "bitcoin", "ethereum", "eth", "ripple", "btc", "coin", "Krypto",]
  let userDataStocksInterests = ["stocks", "stonks", "aktien", "apple", "tesla", "gme", "gamestop", "oatly", "square", "facebook",]
  let userDataGeneralInterests = ["inflation", "ezb", "fet", "rendite", "feature", "meta", "dividende", "ipo", "msci", "china", "sparen", "steuer", "tax", "wohnungsmarkt", "Zinsen", "interest+rates", "housing+market",]
  let personsOfInterest = ["elonmusk", "finanzfluss", "talerbox", "AlleAktien", "aktiengram", "justETF", "RayDalio",]

  const userInterestsObject = {
    userDataCryptoInterests: userDataCryptoInterests,
    userDataStocksInterests: userDataStocksInterests,
    userDataGeneralInterests: userDataGeneralInterests,
    personsOfInterest: personsOfInterest,
  }
  return userInterestsObject;
}
