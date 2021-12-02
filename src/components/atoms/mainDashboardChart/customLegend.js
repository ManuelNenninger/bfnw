import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SvgIcon from '@mui/material/SvgIcon';



const ColorButton = styled(Button)(({ theme }) => ({
  color: "black",
  "&:hover": {
    borderBottom: "1px solid black"
  }
}));


export default function BoxSx(props) {

  function setWeekdaySelection(event) {
      props.setWeekdaySelection(event.target.value);
    }

  return (
    <Box
      sx={{
        width: "100%",
        paddingBottom: 1,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <FiberManualRecordIcon sx={{ paddingRight: 1 }} />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              id="legend_label"
            >
              h6. Heading
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  id="legend_price"
                >
                  h4. Heading
                </Typography>
              </Grid>
              <Grid item>
                <AttachMoneyIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box sx={{pr: 1, pl: 1, borderRadius: 3, border: 1, borderColor: "#ffffff", mindWidth: "1rem" }} id="relative_returne_Box">
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <SvgIcon component={ArrowDropUpIcon} id="xTest"/>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    id="relative_returne"
                  >
                    Return
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%" }}>
        <ButtonGroup
          variant="outlined"
          size="small"
          aria-label="text button group"
          color="secondary"
        >
        <ColorButton value="intraday" onClick={setWeekdaySelection}>
          Intraday
        </ColorButton>
        <ColorButton value="week" onClick={setWeekdaySelection}>
          Week
        </ColorButton>
        <ColorButton value="month" onClick={setWeekdaySelection}>
          Month
        </ColorButton>
        <ColorButton value="max" onClick={setWeekdaySelection}>
          Max
        </ColorButton>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
