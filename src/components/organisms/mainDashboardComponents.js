import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import EmblaCarousel from "../molecules/carousel/emblaCarousel";
import PerformanceDashboard from "../molecules/performanceDashboard";
import NewsFeed from "./newsFeed";
import theme from "../../../styles/theme";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppContext } from "../../appContext";

const drawerWidth = 240;
const SLIDE_COUNT = 2;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function MainDashboardComponents(props) {
  //const [mobileOpen, setMobileOpen] = React.useState(false);
  const [interestsInFocusArray, setInterestsInFocusArray] = React.useState([
    "OTLY",
    "SQ",
  ]);
  let value = useAppContext();

  return (
    <>
      <Toolbar />
      <EmblaCarousel
        slides={slides}
        interestsInFocusArray={interestsInFocusArray}
        setInterestsInFocusArray={setInterestsInFocusArray}
      />
      <PerformanceDashboard />
      <NewsFeed />
      <Snackbar open={value.openSnackbar} autoHideDuration={6000}>
        <MuiAlert
          elevation={10}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          In der BETA Version kannst Du nur 5 Aufrufe pro Minute machen.
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default MainDashboardComponents;
