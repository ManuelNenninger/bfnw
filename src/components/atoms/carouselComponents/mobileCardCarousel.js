import * as React from 'react';
import { useEffect, useRef } from "react";
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
import DataRequestPolygonIo from "../mainDashboardChart/dataRequestPolygonIo";
import RelativeReturnCalc from "../../calc/relativeReturne";
import theme from '../../../../styles/theme';




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


  const carouselCardTickerSelection = {
    "0": "OTLY",
    "1": "GME",
    "2": "TSLA",
    "3": "AAPL",
    "4": "SA",
  };

  //<-------- ChartJs Funktion, um den Chart zu erstellen -------->
  const InitialChartJsFunctionforCard = async (event) => {
    //Hie wird die Data angefordert. Da auf die Daten gewartet werden muss, ist hier eine await funktion.
    const { dataValueArray, dataKeyArray, metaData } = await DataRequestPolygonIo({weekdaySelection: "week", searchContent: carouselCardTickerSelection[props.slideIndex]});
    //Hier werden die Daten in die HTML Elemente injeziert
    document.getElementById("Mobile_Typography_SlideIndex_" + props.slideIndex + "_RowIndex_0").innerHTML = metaData;
    document.getElementById("Mobile_Typography_SlideIndex_" + props.slideIndex + "_RowIndex_1").innerHTML = RelativeReturnCalc(dataValueArray[0],dataValueArray[dataValueArray.length - 1]) + "%";
    document.getElementById("Mobile_Typography_SlideIndex_" + props.slideIndex + "_RowIndex_2").innerHTML = dataValueArray[dataValueArray.length - 1];
    if (dataValueArray[0] >= dataValueArray[dataValueArray.length - 1]) {
      document.getElementById("Mobile_Relative_Return_ArrowDropUpIcon_SlideIndex_" +  props.slideIndex).style.display = "none";
      document.getElementById("Mobile_Typography_SlideIndex_" + props.slideIndex + "_RowIndex_1").style.color = theme.palette.error.main;
    } else {
      document.getElementById("Mobile_Relative_Return_ArrowDropDownIcon_SlideIndex_" +  props.slideIndex).style.display = "none";
      document.getElementById("Mobile_Typography_SlideIndex_" + props.slideIndex + "_RowIndex_1").style.color = theme.palette.primary.main;
    }
  };

  useEffect(() => {
  InitialChartJsFunctionforCard();
}, []);

  return (
    <div>
      <Grid container direction="column" alignItems="flex-start" sx={{marginRight: {xs: theme.spacing(4), md: "none"}}}>
    {
    props.ArrayContent.map((contentObject, index) =>(
    <Grid item xs={12} key={props.slideIndex + "_" + index}>
      <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          >
        <Grid item >
          {index === 1 ? (<>
            <SvgIcon id={"Mobile_Relative_Return_ArrowDropUpIcon_SlideIndex_" +  props.slideIndex} sx={{color: theme.palette.primary.main}} component={ArrowDropUpIcon} /> <SvgIcon id={"Mobile_Relative_Return_ArrowDropDownIcon_SlideIndex_" +  props.slideIndex} sx={{color: theme.palette.error.main}} component={ArrowDropDownIcon} />
            </>)
            :
            <SvgIcon component={contentObject.icon} /> }
        </Grid>
        <Grid item >
          <Typography
            sx={{marginLeft: theme.spacing(1)}}
            variant={contentObject.typographyVariantmobile}
            component="div"
            id={"Mobile_Typography_SlideIndex_" + props.slideIndex + "_RowIndex_"+ index}
          >
              loading...
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    ))
    }
  </Grid>

</div>
  );
}
