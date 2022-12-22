import * as React from "react";
import Box from "@mui/material/Box";
import SectionOne from "../atoms/homePage/sectionOne";
import SectionTwo from "../atoms/homePage/sectionTwo";
import SectionThree from "../atoms/homePage/sectionThree";
import SectionFour from "../atoms/homePage/sectionFour";
import SvgIcon from "@mui/material/SvgIcon";
import theme from "../../../styles/theme";

export default function homePageMainComponents() {
  const SvgWave = function ({ children }) {
    return (
      <Box>
        <SvgIcon
          sx={{ height: 300, width: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          {children}
        </SvgIcon>
      </Box>
    );
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "primary.veryLight",
          //flexGrow: 1,
          //paddingTop: 20,
        }}
      >
        <SectionOne />
        {/*Wave Eins*/}
        {/*<SvgWave>
          <path
            fill={theme.palette.primary.light}
            fillOpacity="1"
            d="M0,32L120,53.3C240,75,480,117,720,149.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </SvgWave>*/}
        <Box
          sx={{
            flexGrow: 1,
            px: { xs: 5, sm: 20 },
            pt: { xs: 0, md: "150px" },
            backgroundColor: "primary.light",
          }}
          id="back-to-processPlan-anchor"
        >
          <SectionTwo />
        </Box>
        {/*Wave Zwei*/}
        <SvgWave>
          <path
            fill={theme.palette.primary.light}
            fillOpacity="1"
            d="M0,32L120,53.3C240,75,480,117,720,149.3C960,181,1200,203,1320,213.3L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </SvgWave>
        <Box sx={{ flexGrow: 1, px: { xs: 5, sm: 20 }, pb: 5 }}>
          <SectionThree />
        </Box>
        <SvgWave>
          <path
            fill={theme.palette.primary.light}
            fillOpacity="1"
            d="M0,32L120,53.3C240,75,480,117,720,149.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </SvgWave>
        <Box
          sx={{
            flexGrow: 1,
            px: { xs: 5, sm: 20 },
            pb: "150px",
            backgroundColor: "primary.light",
          }}
          id="back-to-about-anchor"
        >
          <SectionFour />
        </Box>
      </Box>{" "}
    </>
  );
}
