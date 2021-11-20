import * as React from 'react';
import {
  styled,
  createTheme
} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppleIcon from '@mui/icons-material/Apple';
import EuroIcon from '@mui/icons-material/Euro';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



// const ArrayContent = [{
//     icon: AppleIcon,
//     content: "Apple",
//     typographyVariant: "h6",
//   },
//   {
//     icon: ArrowDropUpIcon,
//     content: "2,1%",
//     typographyVariant: "subtitle2",
//   },
//   {
//     icon: EuroIcon,
//     content: "130",
//     typographyVariant: "h6",
//   }
// ]


export default function MobileCardCarousel(props) {
  const theme = createTheme();




  return (
    <div>
  <Grid container direction="column" alignItems="flex-start" sx={{marginRight: {xs: theme.spacing(10), md: "none"}}}>

    {
    props.ArrayContent.map((contentObject, index) =>(
    <Grid item xs={12} key={index}>
      {
      index === 0 ? (
      <>
        <Grid item xs={12} key={index}>
          <Grid item border>
            <SvgIcon component={contentObject.icon} sx={{fontSize: 50, color: contentObject.icon === ArrowDropUpIcon ? ("#4caf50") : (contentObject.icon === ArrowDropDownIcon ? ("#4caf50") : (theme.palette.text.primary))}} />
          </Grid>
        </Grid>
        <Grid item xs={12} key={index}>
          <Typography sx={{ marginTop: theme.spacing(2), color: contentObject.icon === ArrowDropUpIcon ? ("#4caf50") : (contentObject.icon === ArrowDropDownIcon ? ("#4caf50") : (theme.palette.text.primary))}} variant={contentObject.typographyVariant}
            component="div">
            {contentObject.content}
          </Typography>
        </Grid>
      </>
      ) : (
      <Grid container direction="row" justifyContent="flex-start" alignItems="center">
        <Grid item>
          <SvgIcon fontSize="small" component={contentObject.icon} sx={{ color: contentObject.icon === ArrowDropUpIcon ? ("#4caf50") : (contentObject.icon === ArrowDropDownIcon ? ("#4caf50") : (theme.palette.text.primary))}} />
        </Grid>
        <Grid item>
          <Typography sx={{marginLeft: theme.spacing(1), color: contentObject.icon === ArrowDropUpIcon ? ("#4caf50") : (contentObject.icon === ArrowDropDownIcon ? ("#4caf50") : (theme.palette.text.primary))}} variant={contentObject.typographyVariant}
            component="div">
            {contentObject.content}
          </Typography>
        </Grid>
      </Grid>
      ) 
      }
    </Grid>
    ))
    }
  </Grid>

</div>
  );
}
