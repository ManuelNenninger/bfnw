import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import EmblaCarousel from "../molecules/carousel/emblaCarousel";
import PerformanceDashboard from "../molecules/performanceDashboard";
import NewsFeed from "./newsFeed";
import theme from "../../../styles/theme";

const drawerWidth = 240;
const SLIDE_COUNT = 2;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function MainDashboardComponents(props) {
  //const [mobileOpen, setMobileOpen] = React.useState(false);
  const [interestsInFocusArray, setInterestsInFocusArray] = React.useState(["OTLY", "SQ"]);




return (
  <>
        <Toolbar />
        <EmblaCarousel slides={slides} interestsInFocusArray={interestsInFocusArray} setInterestsInFocusArray={setInterestsInFocusArray}/>
        <PerformanceDashboard />
        <NewsFeed />
    </>);

}

export default MainDashboardComponents;
