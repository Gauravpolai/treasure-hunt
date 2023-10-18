import React, { useState, useEffect } from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import axios from 'axios'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Store from "../redux/store";
import { getAllUser } from "../redux/actions/adminUser";
import { useSelector } from "react-redux";
import Loader from "./loader";
import {useNavigate} from 'react-router-dom' 
const AdminQuiz = () => {
  const { isLoadingUser, allUser } = useSelector((state) => state.adminUser);
  const navigate = useNavigate();
  useEffect(()=>{
    Store.dispatch(getAllUser());
  },[])

  const handleDeleteRow = async(id) => {
    try {
      const data = await axios.delete(
        `https://treasure-hunt-tcb7.onrender.com/api/v1/user/delete-user/${id}`,
        { withCredentials: true },
      );
      // toast.success("Login Success!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {id: 'sno', label: "S.no", minwidth: 50},
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "email",
      label: "Email-id",
      minWidth: 170,
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 100,
      align: "center",
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full mt-[5rem]">
          <div className="w-[80px] md:w-[330px] sticky top-[5rem]">
            <AdminSideBar active={4} />
          </div>
          <div className="w-[85%] md:w-full flex flex-col">
            <div className="flex items-center justify-center mt-2 w-full">
              {isLoadingUser ? (
                <Loader />
              ) : (
                <Paper className="w-[85%] md:w-[95%] overflow-hidden">
                  <TableContainer className="h-[80%] md:h-[550px]">
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
                        {allUser
                          .map((row, index) => (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row._id}
                            >
                              {columns.map((column) => {
                                if (column.id === "sno") {
                                  
                                  return (
                                    <TableCell key={column.id} align={column.align}>
                                      {index + 1}
                                    </TableCell>
                                  );
                                }
                                else if (column.id === "actions") {
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      <Button
                                        variant="contained"
                                        className="bg-indigo-600"
                                        onClick={()=>handleDeleteRow(row._id)}
                                      >
                                        Delete
                                      </Button>
                                    </TableCell>
                                  );
                                } else {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={column.id}
                                      align={column.align}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                }
                              })}
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    // onPageChange={() => {handleChangePage && setSelectedRow(row.id)}}
                  /> */}
                </Paper>
              )} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuiz;
