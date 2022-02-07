import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function controlerinput(props){
  let {kategorie, setKategorie} = props;

  const handleChange = (event) => {
    setKategorie(event.target.value);
    //console.log(kategorie);
  };
  return(
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth variant="standard">
        <InputLabel id="demo-simple-select-standard-label">
          Markt Kategorien
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          value={kategorie}
          onChange={handleChange}
          label="Kategorie"
          sx={{ textAlign: "center" }}
        >
          <MenuItem value={10}>
            <Typography variant="subtitle1">Top-Gewinner</Typography>
          </MenuItem>
          <MenuItem value={20}>
            <Typography variant="subtitle1">Top-Verlierer</Typography>
          </MenuItem>
        {/*<MenuItem value={30}>
            <Typography variant="subtitle1">Meist gekaufte</Typography>
          </MenuItem>
          <MenuItem value={40}>
            <Typography variant="subtitle1">Stärkster Wachstum</Typography>
          </MenuItem>*/}
        </Select>
      </FormControl>
    </Box>
  );
}
