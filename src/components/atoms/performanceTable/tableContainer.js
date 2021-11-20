import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppleIcon from "@mui/icons-material/Apple";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)({
  boxShadow: 'none',
});

// const StyledPaper = styled(Paper)(({ theme }) => (
//   console.log(theme),
//   {
//   backgroundColor: theme.palette.primary.main,
// }));

const columns = [
  { id: "icon", label: "Asset", width: 0, align: "left" },
  { id: "assetName", label: "", align: "left" },
  {
    id: "info",
    label: "Info",
    minWidth: 200,
    align: "right",
    format: (value) => <SvgIcon component={value} />
  }
];

function createData(icon, assetName, info) {
  return { icon, assetName, info };
}

const rows = [
  createData("FacebookIcon", "Apple", 3287263),
  createData("FacebookIcon", "Apple", 3287263),
  createData("FacebookIcon", "Apple", 3287263),
  createData("FacebookIcon", "Apple", 3287263),
  createData("FacebookIcon", "Apple", 3287263),
  createData("FacebookIcon", "Apple", 3287263),
  createData("FacebookIcon", "Apple", 3287263),
  createData("FacebookIcon", "Apple", 3287263)
];

export default function StickyHeadTable() {
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
                        key={column.id}
                        align={column.align}
                        width={column.width}
                        sx={{ width: column.width }}
                      >
                        {/*{column.format && typeof value === "string"
                        ? column.format(value)
                        : value}*/}
                        {column.id === "icon" ? <AppleIcon /> : value}
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
