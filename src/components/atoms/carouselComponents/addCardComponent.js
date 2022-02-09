import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Typography from "@mui/material/Typography";
import AsynchronousSearchAdding from "./asynchronousSearchAdding";
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';

const ariaLabel = { "aria-label": "description" };

export default function AddCardComponent(props) {
  return (
    <Box
      sx={{
        width: "100%",
        border: { xs: 0, md: 2 },
        borderRadius: 5,
        borderColor: { md: "primary.main" }
      }}
    >
      <Box
        sx={{
          padding: (1, 2),
          borderRadius: { xs: 10, md: "none" },
          border: { xs: 1, md: "none" },
          display: { xs: "inline-block", md: "block" },
          minWidth: "300px"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ width: "100%" }}
        >
          <Grid item>
            <Grid
            sx={{ pb: 2}}
            spacing={1}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item>
                  <BookmarkAddRoundedIcon/>
                </Grid>
                <Grid item>
                  <Typography
                    //sx={{ pb: 2.5}}
                    variant="h6"
                    component="div"
                    //color="secondary"
                  >
                    Titel hinzufügen
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item >
            <AsynchronousSearchAdding {...props} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
