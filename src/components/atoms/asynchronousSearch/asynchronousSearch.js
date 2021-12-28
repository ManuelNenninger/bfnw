import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CostumeAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiInputBase-root": {
    padding: "4px"
  }
}));

const CostumePaper = ({ children, ...other }) => (
  <Paper
    {...other}
    sx={{ border: 1, borderColor: "#f4f4f4" }}

  >
    {children}
  </Paper>
);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));



export default function Asynchronous(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  //Loading ist true, wenn in search etwas eingegeben wird
  //Sobald das Ergebnis vorhanden ist, wird lading false
  const [loading, setLoading] = React.useState(false);

  //<--------- State fuer die Search eingabe --------->
  function handlePaperClick(event) {
    //Wenn kein Suchergebis vorliegt aber dennoch auf die Auswahl geklickt wird, wird nichts durchgefuehrt
    if(event === "-"){
      return;
    }
    props.setSearchContent(event);
  }

  function searchInputChanged(event) {
    setSearchInput(event.target.value);
    setLoading(true);
  }

  //Wenn search ge-opened wird, aendert sich loading und man geht in diesen useEffect
  React.useEffect(() => {
    let active = true;

    //wenn search geoeffnet ist UND ergebnisse vorhanden sind wird useEffect hier abgebrochen,
    //Sodass keine neuen Daten erneut gefetched werden.
    if (!loading) {
      return undefined;
    }

    (async () => {

      const searchURL = await "https://api.polygon.io/v3/reference/tickers?search=" + searchInput + "&active=true&sort=ticker&order=desc&limit=10&apiKey=";
      const response = await fetch(`api/searchRequestPolygonIo`, {
            body: JSON.stringify(
              searchURL
            ),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        );
      const res = await response.json();

      if (active) {
        if(res.results == null){
          setOptions([{name: "No Results on NASDAQ", ticker: "-"}]);
          setLoading(false);
        } else {
          setOptions([...res.results]);
          setLoading(false);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  //Hier wird nach close der search das Options Array fuer die
  //Naechste fetch geleert
  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Search>
      <CostumeAutocomplete
        filterOptions={(options) => options}
        id="asynchronous-demo"
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        //isOptionEqualToValue vergleicht nochmal das, was Du eingegeben hast mit dem Ergebnis-Array (options)
        //isOptionEqualToValue={(option, value) => (option.name === value.title)}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        PaperComponent={CostumePaper}
        renderOption={(props, option, state) => {
          return (
            <>
              <Box
                {...props}
                sx={{
                  pt: 0.5,
                  pl: 1,
                  pr: 1,
                  pb: 2,
                  borderBottom: 1,
                  borderColor: "#f4f4f4",
                }}
                //onClick={(e) => handlePaperClick(e)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  value={option.ticker}
                  onClick={() => handlePaperClick(option.ticker)}
                >
                  <Typography variant="overline" value={option.ticker}>
                    Ticker: {option.ticker}
                  </Typography>
                  <Typography variant="subtitle2" value={option.ticker}>
                    {option.name}
                  </Typography>
                </Grid>
              </Box>
            </>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(event) => searchInputChanged(event)}
            label="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
        )}
      />
    </Search>
  );
}
