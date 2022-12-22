//Hier wird der Context Provider von React verwendet, um prop drilling zu vermeiden
//Auch ist das eine sinvolle loesung, um Props von den Layout Componenten an die Child-COmponenten weiter zu geben
//https://www.techomoro.com/how-to-use-context-api-in-a-next-js-app/
//https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchContent, setSearchContent] = useState("AAPL");
  const [snackCounter, setSnackCounter] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  let timeleft = 10;
  useEffect(() => {
    console.log(snackCounter);
    if (snackCounter >= 5) {
      setOpenSnackbar(true);
    }

    if (timeleft === 10 && snackCounter === 1) {
      const downloadTimer = setInterval(function () {
        // console.log("Es sind noch " + timeleft + " Sekunden verbleibend");
        if (timeleft <= 0) {
          setSnackCounter(0);
          setOpenSnackbar(false);
          timeleft = 10;
          // console.log("Der Timer wurde zurück gestellt: " + timeleft);
          clearInterval(downloadTimer);
        }
        timeleft -= 1;
      }, 1000);
    }

    return () => {};
  }, [snackCounter]);

  return (
    <AppContext.Provider
      value={{
        searchContent: searchContent,
        setSearchContent: setSearchContent,
        snackCounter: snackCounter,
        setSnackCounter: setSnackCounter,
        openSnackbar: openSnackbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
