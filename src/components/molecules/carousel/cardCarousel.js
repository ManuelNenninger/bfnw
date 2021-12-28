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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MobileCardCarousel from "../../atoms/carouselComponents/mobileCardCarousel";
import ChartCarouselCard from "../../atoms/carouselComponents/chartCarouselCard";
import theme from '../../../../styles/theme';
import DataRequestPolygonIo from "../../atoms/mainDashboardChart/dataRequestPolygonIo";


const mobile = MobileCardCarousel;


const ArrayContent = [
  {
    icon: FiberManualRecordIcon,
    typographyVariant: "subtitle2",
    typographyVariantmobile: "h6",
  },
  {
    icon: ArrowDropUpIcon,
    typographyVariant: "body2",
    typographyVariantmobile: "body2",
  },
  {
    icon: AttachMoneyIcon,
    typographyVariant: "h4",
    typographyVariantmobile: "h6",
  }
]

export default function RecipeReviewCard(props) {
  //Hier sind die Standart Ticker für den Carousel. Spaeter ersetzen.
  const carouselCardTickerSelection = {
    "0": "OTLY",
    "1": "GME",
    "2": "TSLA",
    "3": "AAPL",
    "4": "SA",
  };


  //<-------- ChartJs Funktion, um den Chart zu erstellen -------->
  // const InitialDataRequestForChardforCard = async (event) => {
  //   //Hie wird die Data angefordert. Da auf die Daten gewartet werden muss, ist hier eine await funktion.
  //    const { dataValueArray, dataKeyArray, metaData } = await DataRequestPolygonIo({weekdaySelection: "week", searchContent: carouselCardTickerSelection[props.slideIndex]});
  //    dataValue = dataValueArray;
  // };
  //
  // useEffect(() => {
  // InitialDataRequestForChardforCard();
  // }, []);

  return (
    <Box sx={{ width: "100%", border: {xs: 0, md: 1},borderRadius: 5, borderColor: {md: 'borderColor.main'},}}>
      <Box sx={{padding: theme.spacing(1, 2), borderRadius: {xs: 10, md: "none"}, border: {xs: 1, md: "none"}, display: {xs: "inline-block", md: "block"}, minWidth: "300px",}}>
        {/* Render bei größer Medium Size die full Cards des Carousels display: { xs: 'none', md: 'block' } */}
      <Box sx={{ display: { xs: 'block'} }}>
        <Grid container
              spacing={0}
              direction="row"
              justifyContent="space-between"
              alignItems="center">
          <Grid item xs={6} zeroMinWidth>
            <Grid container
                direction="column"
                alignItems="flex-start"
            >
              {
                ArrayContent.map((contentObject, index) =>(
                  <Grid item xs={12} key={props.slideIndex + "_" + index}>
                    <Grid container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        >
                      <Grid item >
                        {index === 1 ? (<>
                          <SvgIcon id={"Relative_Return_ArrowDropUpIcon_SlideIndex_" +  props.slideIndex} sx={{color: theme.palette.primary.main}} component={ArrowDropUpIcon} /> <SvgIcon id={"Relative_Return_ArrowDropDownIcon_SlideIndex_" +  props.slideIndex} sx={{color: theme.palette.error.main}} component={ArrowDropDownIcon} />
                          </>)
                          :
                          <SvgIcon component={contentObject.icon} /> }
                      </Grid>
                      <Grid item >
                        <Typography
                          sx={{marginLeft: theme.spacing(1)}}
                          variant={contentObject.typographyVariant}
                          component="div"
                          id={"Typography_SlideIndex_" + props.slideIndex + "_RowIndex_"+ index}
                        >
                            loading...
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))
              }
              </Grid>
            </Grid>
          <Grid item xs={6}>
          <Box
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: 100,
          }}
        >
        <ChartCarouselCard
          slideIndex={props.slideIndex}
        />
        </Box>
          </Grid>
        </Grid>
        </Box>
        {/* Render bei Medium Size die mobile Cards des Carousels */}
        {/*<Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <MobileCardCarousel
            ArrayContent={ArrayContent}
            slideIndex={props.slideIndex}
          />
        </Box>*/}
      </Box>

    </Box>

  );
}
