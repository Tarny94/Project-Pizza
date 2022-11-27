import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Pages/Menu/ProductCard.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable({
  edit,
  columns,
  row,
  onClick,
  setId,
}: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={130}>{edit}</TableCell>
            {columns.map((column: any) => {
              return <TableCell align="center">{column}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((product: any, id: number) => (
            <TableRow key={id} sx={{}}>
              <TableCell component="th" scope="row">
                <div style={{ display: "flex" }}>
                  <div
                    style={{ cursor: "pointer", marginRight: 15 }}
                    onClick={() => {
                      return onClick(product.pizza_id);
                    }}
                  >
                    {<DeleteIcon />}
                  </div>
                  <div style={{ cursor: "pointer" }} onClick={() => {}}>
                    {<EditIcon />}
                  </div>
                </div>
              </TableCell>
              <TableCell align="center">{id + 1}</TableCell>
              <TableCell
                align="center"
                sx={{
                  overflow: "hidden",
                  maxWidth: 100,
                }}
              >
                {product.title}
              </TableCell>
              <TableCell
                align="center"
                size="medium"
                variant="head"
                sx={{
                  overflow: "hidden",
                  maxWidth: 200,
                }}
              >
                {product.image}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  overflow: "hidden",
                  maxWidth: 200,
                }}
              >
                {product.description}
              </TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">{product.discount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
