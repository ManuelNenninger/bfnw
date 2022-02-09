import * as React from "react";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import DataRequestSnapshotPolygonIo from "./dataRequestSnapshotPolygonIo";
import { useAppContext } from "../../../appContext";

const StyledPaper = styled(Paper)({
  boxShadow: 'none',
});

// const StyledPaper = styled(Paper)(({ theme }) => (
//   console.log(theme),
//   {
//   backgroundColor: theme.palette.primary.main,
// }));

//Hinweis: TickerSymbol wird hier nicht hinzugefuegt, da es in der Tabelle nicht gerendert wird!
const columns = [
  { id: "icon", label: "Asset", width: 0, align: "left" },
  { id: "assetName", label: "", align: "left" },
  {
    id: "closePrice",
    label: "Last Price ($)",

    align: "right",
    format: (value) => <SvgIcon component={value} />
  },
  {
    id: "interest",
    label: "Interest (%)",
    //minWidth: 10,
    align: "right",
    format: (value) => <SvgIcon component={value} />
  }
];

// function createData(icon, assetName, closePrice, interest) {
//   return { icon, assetName, closePrice, interest };
// }

// const rows = [
//   createData("FacebookIcon", "Apple", 3287263),
//   createData("FacebookIcon", "Apple", 3287263),
//   createData("FacebookIcon", "Apple", 3287263),
//   createData("FacebookIcon", "Apple", 3287263),
//   createData("FacebookIcon", "Apple", 3287263),
//   createData("FacebookIcon", "Apple", 3287263),
//   createData("FacebookIcon", "Apple", 3287263),
//   createData("FacebookIcon", "Apple", 3287263)
// ];


export default function StickyHeadTable(props) {
  const [rows, setRows] = React.useState([]);
  let {kategorie, setKategorie} = props;
  let value = useAppContext();

  function handleClick(event){
    value.setSearchContent(event)
  }

  const InitialSnapshotRequest = async (event) => {
    let snapshotArray = await DataRequestSnapshotPolygonIo(kategorie);
    setRows(snapshotArray)
  };

  useEffect(() => {
  InitialSnapshotRequest();

  // (async function(){
  //   const response = await fetch(`api/tickerMapRequestPolygonIo`, {
  //         body: JSON.stringify(
  //           "nix"
  //         ),
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         method: 'POST'
  //       }
  //     );
  //     const res = await response.json();
  //     console.log(res);
  // })();

  }, [kategorie]);

  return(
    <StyledPaper sx={{ width: "100%", overflow: "hidden", }}>
      <TableContainer sx={{ maxHeight: 420 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        onClick={() => handleClick(row.tickerSymbol)}
                        key={column.id}
                        align={column.align}
                        width={column.width}
                        sx={{ width: column.width }}
                      >
                        {/*{column.format && typeof value === "string"
                        ? column.format(value)
                        : value}*/}
                        {column.id === "icon" ? <FiberManualRecordIcon /> : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledPaper>
  );
}
