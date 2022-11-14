import { Box, CircularProgress, Grid, } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, } from 'react-router-dom';
import "./Dashboard.css"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
function Dashboard() {

    const [totalStudent, setTotalStudent] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllCardData = async () => {
            setLoading(true);
            const result = await axios.get("https://tunicslab.herokuapp.com/student/count");
            setTotalStudent(result.data)
            setLoading(false);
            // console.log(totalStudent)

        };
        getAllCardData()
    }, [totalStudent])

    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={3}>
                <Grid className='dashboard_container' item xs={12}>
                    {loading === true ? (<div style={{ marginTop: "50px" }}>
                        <CircularProgress size={70} color="warning" />
                    </div>) : (
                        <Box className="dashMain">
                            <div className='card cardStudent'>
                                <div className='content'>
                                    <SchoolOutlinedIcon />
                                    <Link to="/student" style={{ textDecoration: "none" }} >
                                        <p>Students</p>
                                    </Link>
                                </div>
                                <p className='count'>{totalStudent}</p>
                            </div>
                            <div className='card cardCourse'>
                                <div className='content'>
                                    <BookmarkBorderOutlinedIcon />
                                    <p>Course</p>
                                </div>
                                <p className='count'>13</p>
                            </div>
                            <div className='card cardPayments'>
                                <div className='content'>
                                    <LocalAtmOutlinedIcon />
                                    <p>Payments</p>
                                </div>
                                <p className='count'>INR 556,000</p>
                            </div>
                            <div className='card cardUsers'>
                                <div className='content'>
                                    <Person2OutlinedIcon />
                                    <p>Users</p>
                                </div>
                                <p className='count'>3</p>
                            </div>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard
