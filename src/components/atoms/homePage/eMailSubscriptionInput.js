import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import Box from '@mui/material/Box';

export default function CheckboxLabels() {
  return (
    <form action="https://web.us1.list-manage.com/subscribe/post?u=0e0ae2dacd97de1468fbc0eec&amp;id=8962cf87da" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <FormGroup row>
        <FormControlLabel
          label
          sx={{ mr: 0 }}
          control={
            <TextField
              sx={{
                height: "100%",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
              }}
              label="E-Mail Adresse"
              variant="outlined"
              type="email"
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
            />
          }
        />
          <FormControlLabel
            label
            value=""
            name="b_0e0ae2dacd97de1468fbc0eec_8962cf87da"
            control={
              <Button
                sx={{
                  height: "100%",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  textTransform: "lowercase"
                }}
                endIcon={<MarkEmailReadRoundedIcon />}
                disableElevation
                variant="contained"
                color="primary"
                type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
              >
                Subscribe
              </Button>
            }
          />
      </FormGroup>
    </form>
  );
}
