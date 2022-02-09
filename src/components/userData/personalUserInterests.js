


export default async function returnUserInterests (object){



  let userDataInterestsInFocus = ["OTLY",]
  //let userDataInterestsInFocus = ["AAPL, GME", "OTLY",]
  let userDataCryptoInterests = ["dogecoin", "doge", "bitcoin", "ethereum", "eth", "ripple", "btc", "coin", "Krypto",]
  let userDataStocksInterests = ["stocks", "stonks", "aktien", "apple", "tesla", "gme", "gamestop", "oatly", "square", "facebook",]
  let userDataGeneralInterests = ["inflation", "ezb", "fet", "rendite", "feature", "meta", "dividende", "ipo", "msci", "sparen", "steuer", "tax", "wohnungsmarkt", "Zinsen", "interest", "(interest + rates)", "(housing + market)",]
  let personsOfInterest = ["elonmusk", "finanzfluss", "talerbox", "AlleAktien", "aktiengram", "justETF", "RayDalio",]

  if(object){
    let {updatedArray} =  object;

      if(updatedArray){
        userDataInterestsInFocus = updatedArray;
        console.log("Es gibt nun ein neues Array hier in der returnUserInterests-Funktion.");
        console.log(userDataInterestsInFocus);
      }
  }

  const userInterestsObject = {
    userDataInterestsInFocus: userDataInterestsInFocus,
    userDataCryptoInterests: userDataCryptoInterests,
    userDataStocksInterests: userDataStocksInterests,
    userDataGeneralInterests: userDataGeneralInterests,
    personsOfInterest: personsOfInterest,
  }
  return userInterestsObject;
}
