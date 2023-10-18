import React, { useEffect } from "react";
import Header from "./Header";
import AdminSideBar from "./adminSideBar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from '@mui/material/TablePagination';
import Store from "../redux/store";
import { getAllUser } from "../redux/actions/adminUser";
import { useSelector } from "react-redux";
import Loader from "./loader";
import { useNavigate } from 'react-router-dom'




export default function AdminViewUsers() {

    const { isLoadingUser, allUser } = useSelector((state) => state.adminUser);
    const navigate = useNavigate();
    useEffect(() => {
        Store.dispatch(getAllUser());
    }, [])

    const columns = [
        { id: 'sno', label: 'S.no', minWidth: 100 },
        { id: 'name', label: 'Name', minWidth: 100 },
        { id: 'email', label: 'Email', minWidth: 100 },
        {
            id: 'marksObtained',
            label: 'Marks Obtained',
            minWidth: 170,
            align: 'center',
            format: (value) => Number(value).toLocaleString('en-US'),
        },
        {
            id: 'quizGiven',
            label: 'Quiz Given',
            minWidth: 170,
            align: 'center',
            format: (value) => value ? 'True' : 'False',
        },
        {
            id: 'timeTaken',
            label: 'Time Taken',
            minWidth: 170,
            format: (value) => {
                const milliseconds = value;
                const seconds = Math.floor(milliseconds / 1000);
                const minutes = Math.floor(seconds / 60);
                const hours = Math.floor(minutes / 60);

                const hh = String(hours).padStart(2, '0');
                const mm = String(minutes % 60).padStart(2, '0');
                const ss = String(seconds % 60).padStart(2, '0');

                return `${hh}:${mm}:${ss}`;
            },
        },
    ];

    function createData(name, email, marksObtained, quizGiven, timeTaken) {
        return { name, email, marksObtained, quizGiven, timeTaken };
    }

    const rows = [
        createData('John Doe', 'john@example.com', 95, true, 12345000), // Time in milliseconds
        createData('Jane Smith', 'jane@example.com', 100, false, 9560000), // Time in milliseconds
        createData('Michael Brown', 'michael@example.com', 25, true, 903120), // Time in milliseconds
        createData('Emily Davis', 'emily@example.com', 55, false, 12144500), // Time in milliseconds
        createData('Robert Johnson', 'robert@example.com', 37, true, 6301800), // Time in milliseconds
        createData('Sarah Wilson', 'sarah@example.com', 27, false, 570900), // Time in milliseconds
        createData('William Martin', 'william@example.com', 83, true, 14436000), // Time in milliseconds
        createData('Olivia Taylor', 'olivia@example.com', 48, false, 8798000), // Time in milliseconds
        createData('Daniel Garcia', 'daniel@example.com', 12, true, 1098300), // Time in milliseconds
        createData('Linda Miller', 'linda@example.com', 12, false, 349600), // Time in milliseconds
        createData('Charles Anderson', 'charles@example.com', 67, true, 5410000), // Time in milliseconds
        createData('Ava Brown', 'ava@example.com', 67, false, 8793000), // Time in milliseconds
        createData('James Lee', 'james@example.com', 14, true, 14436000), // Time in milliseconds
        createData('Mary Hernandez', 'mary@example.com', 20, false, 8792000), // Time in milliseconds
        createData('David Clark', 'david@example.com', 21, true, 9010000), // Time in milliseconds
    ];



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div>
            <Header />
            <div className="w-full flex">
                <div className="flex items-start justify-between w-full mt-[5rem]">
                    <div className="w-[80px] md:w-[330px] sticky top-[5rem]">
                        <AdminSideBar active={1} />
                    </div>
                    <div className="w-[73%] md:w-[90%] flex flex-col mr-2 md:mr-4 md:ml-3">
                        <div className="flex items-center justify-center mt-2 w-full">
                            {isLoadingUser ? (
                                <Loader />
                            ) : (
                                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                    <TableContainer sx={{ maxHeight: 440 }}>
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
                                                {rows
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((row, index) => {
                                                        return (
                                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                {columns.map((column) => {
                                                                    const value = row[column.id];
                                                                    if (column.id === "sno") {

                                                                        return (
                                                                            <TableCell key={column.id} align={column.align}>
                                                                                {index + 1}
                                                                            </TableCell>
                                                                        );
                                                                    }
                                                                    else if (column.id === 'quizGiven') {
                                                                        return (
                                                                            <TableCell key={column.id} align={column.align}>
                                                                                {value ? 'True' : 'False'}
                                                                            </TableCell>
                                                                        );
                                                                    }
                                                                    else {

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
                                                        );
                                                    })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25, 100]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
