import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import "./StudentPage.css"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import StudentModel from './StudentModel';
import { Link } from "react-router-dom"
function StudentPage() {

    const [open, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const [student, setStudent] = useState([])
    const [loading, setLoading] = useState(false);

    const getStudent = async () => {
        setLoading(true);
        const result = await axios.get("https://tunicslab.herokuapp.com/student");
        setStudent(result.data)
        setLoading(false);
        // console.log(result.data)
    };
    useEffect(() => {
        getStudent()
    }, [])

    const deleteUser = async id => {
        await axios.delete(`https://tunicslab.herokuapp.com/student/${id}`)
        getStudent();
    }


    return (

        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={3}>
                <Grid className='student_container' item xs={12}>
                    <Box className="students_header">
                        <Typography fontWeight="600" fontSize="22px">Student List</Typography>
                        <button className='addUserButton' onClick={handleOpen}>ADD NEW STUDENT</button>
                    </Box>
                    <hr />
                    {loading === true ? (<div style={{ marginTop: "50px" }}>
                        <CircularProgress size={70} color="warning" />
                    </div>) : (
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Enroll Number</th>
                                <th>Date of admission</th>
                            </tr>
                            {student?.map((index) => (
                                <tr className='column' key={index._id}>
                                    <td>{index.name}</td>
                                    <td>{index.email}</td>
                                    <td>{index.phone}</td>
                                    <td>{index.enrollNo}</td>
                                    <td>{index.date}</td>
                                    <td>
                                        <Link to={`/student/${index._id}`}>
                                            <ModeEditOutlineOutlinedIcon style={{ marginRight: "20px", color: "#FEAF00", cursor: "pointer" }} />
                                        </Link>
                                        <DeleteOutlinedIcon onClick={() => deleteUser(index._id)} style={{ color: "#FEAF00", cursor: "pointer" }} />
                                    </td>
                                </tr>
                            ))}
                        </table>
                    )}

                </Grid>
            </Grid>
            {open && <StudentModel open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} />}

        </Box >
    )
}

export default StudentPage