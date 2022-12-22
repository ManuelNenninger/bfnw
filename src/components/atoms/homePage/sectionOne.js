import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CallToActionButton from "./callToActionButton";
import SendIcon from "@mui/icons-material/Send";
import EMailSubscriptionInput from "./eMailSubscriptionInput";
import Image from "next/image";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function AutoGrid() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(-45deg, #ffffff, #ffffff, #B9DFD2, #408C73)",
        animation: "gradient 15s ease infinite",
        backgroundSize: "200% 300%",
        "@keyframes gradient": {
          "0%": {
            backgroundPosition: "0px 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          px: { xs: 0, md: 40 },
          backgroundImage:
            "linear-gradient( to bottom, rgba( 185, 223, 210, 0 ) 0%, rgba( 185, 223, 210, 0.7 ) 80%,rgba( 185, 223, 210, 1 ) 90%, rgba( 185, 223, 210, 1 ) 100% )",
        }}
        spacing={1}
      >
        <Grid item>
          <Typography
            align="center"
            variant="h1"
            sx={{ fontWeight: "500", display: { xs: "none", md: "block" } }}
            gutterBottom
          >
            Sehe Insights zu deinen Investments
          </Typography>
          <Typography
            align="center"
            variant="h2"
            sx={{ fontWeight: "500", display: { xs: "block", md: "none" } }}
            gutterBottom
          >
            Sehe Insights zu deinen Investments
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align="center"
            variant="h3"
            sx={{ fontWeight: "300", pb: 1 }}
            gutterBottom
          >
            Aktuelle Zahlen, Charts und News von Social Media Plattformen zu
            deinen Investments
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ pt: 2 }}
          >
            <Grid item>
              <Link href="/dashboard">
                <Button variant="contained" fullWidth sx={{ px: 20, py: 2 }}>
                  Live Demo
                </Button>
              </Link>
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              {/*<Divider
                light={true}
                variant="middle"
                sx={{ my: 1.5, backgroundColor: "white", height: 0 }}
              />*/}
            </Grid>
            {/*<Grid item sx={{ width: "100%" }}>
              <EMailSubscriptionInput />
            </Grid>*/}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
