import "../../Menu/ProductCardStyle.scss";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TableProducts({
  edit,
  columns,
  row,
  HandleDelete,
  HandleEdit,
}: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={130} sx={{ fontWeight: "bolder" }}>
              {edit}
            </TableCell>
            {columns.map((column: any, id: number) => {
              return (
                <TableCell
                  align="center"
                  key={id}
                  sx={{ fontWeight: "bolder" }}
                >
                  {column}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((product: any, id: number) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                <div style={{ display: "flex" }}>
                  <div
                    style={{ cursor: "pointer", marginRight: 15 }}
                    onClick={() => {
                      return HandleDelete(product.pizza_id);
                    }}
                  >
                    {<DeleteIcon titleAccess="DELETE" />}
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      return HandleEdit(product.pizza_id);
                    }}
                  >
                    {<EditIcon titleAccess="EDIT" />}
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
