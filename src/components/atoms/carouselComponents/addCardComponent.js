import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AsynchronousSearchAdding from "./asynchronousSearchAdding";
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';

const ariaLabel = { "aria-label": "description" };

export default function AddCardComponent(props) {
  return (
    <Box
      sx={{
        width: "100%",
        border: { xs: 0, md: 1 },
        borderRadius: 5,
        borderColor: { md: "borderColor.main" }
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
              {/*<IconButton color="primary" aria-label="add to shopping cart">
                  <AddCircleOutlineRoundedIcon sx={{ fontSize: 50 }} />
                </IconButton>*/}
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
            {/*<Input
              placeholder="Füge einen Titel hinzu"
              inputProps={ariaLabel}
              //fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <ArrowRightRoundedIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddCircleOutlineRoundedIcon />
                    <Typography
                      sx={{pl: 0.5}}
                      variant="button"
                      component="span"
                      color="primary"
                    >
                      add
                    </Typography>
                  </IconButton>
                </InputAdornment>
              }
            />*/}
          </Grid>
          {/*<Grid item sx={{ minWidth: "70%" }}>
            <Button
            size="small"
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineRoundedIcon />}
            >
              Add
            </Button>
          </Grid>*/}
        </Grid>
      </Box>
    </Box>
  );
}
