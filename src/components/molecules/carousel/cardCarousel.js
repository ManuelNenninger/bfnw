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
import MobileCardCarousel from "../../atoms/carouselComponents/mobileCardCarousel";
import ChartCarouselCard from "../../atoms/carouselComponents/chartCarouselCard";

const mobile = MobileCardCarousel;


const ArrayContent = [
  {
    icon: AppleIcon,
    content: "Apple",
    typographyVariant: "subtitle2",
  },
  {
    icon: ArrowDropUpIcon,
    content: "2,1%",
    typographyVariant: "body2",
  },
  {
    icon: EuroIcon,
    content: "130",
    typographyVariant: "h4",
  }
]

export default function RecipeReviewCard(props) {
const theme = createTheme();



  return (
    <Box sx={{ width: "100%", height: '100%', border: {xs: 0, md: 1},borderRadius: 5, borderColor: {md: 'borderColor.main'},}}>
      <Box sx={{padding: theme.spacing(1, 2), borderRadius: {xs: 10, md: "none"}, border: {xs: 1, md: "none"}, display: {xs: "inline-block", md: "block"} }}>
        {/* Render bei größer Medium Size die full Cards des Carousels */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                        <SvgIcon
                          component={contentObject.icon}
                          sx={{ color: contentObject.icon === ArrowDropUpIcon ? ("#4caf50") : (contentObject.icon === ArrowDropDownIcon ? ("#4caf50") : (theme.palette.text.primary))}}
                        />
                      </Grid>
                      <Grid item >
                        <Typography
                          sx={{marginLeft: theme.spacing(1), color: contentObject.icon === ArrowDropUpIcon ? ("#4caf50") : (contentObject.icon === ArrowDropDownIcon ? ("#4caf50") : (theme.palette.text.primary))}}
                          variant={contentObject.typographyVariant}
                          component="div">
                            {contentObject.content}
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
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <MobileCardCarousel
            ArrayContent={ArrayContent}
          />
        </Box>
      </Box>

    </Box>

  );
}
