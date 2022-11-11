import { Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Dashboard.css"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
function Dashboard() {

    const [totalCourse, setTotalCourse] = useState("");
    const [totalContact, setTotalContact] = useState("");
    const [totalBlogs, setTotalBlogs] = useState("");
    const [totalFaq, setTotalFaq] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("userInfo"))
            navigate("/")
    }, [navigate])
    useEffect(() => {
        const getAllCardData = async () => {
            setLoading(true);
            const result = await axios.get("https://jeevmokshayogaadminportal.herokuapp.com/api/booking/count");
            const result2 = await axios.get("https://jeevmokshayogaadminportal.herokuapp.com/api/contact/count");
            const result3 = await axios.get("https://jeevmokshayogaadminportal.herokuapp.com/api/blogs/count");
            const result4 = await axios.get("https://jeevmokshayogaadminportal.herokuapp.com/api/faq/count");
            setTotalCourse(result.data)
            setTotalContact(result2.data)
            setTotalBlogs(result3.data)
            setTotalFaq(result4.data)
            setLoading(false);
            console.log(totalCourse)
            console.log(totalContact)
            console.log(totalBlogs)
            console.log(totalFaq)
        };
        getAllCardData()
    }, [totalBlogs, totalContact, totalCourse, totalFaq])

    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={3}>
                <Grid className='dashboard_container' item xs={12}>
                    {loading === true ? (<div style={{ marginTop: "50px" }}>
                        <CircularProgress size={70} color="inherit" />
                    </div>) : (
                        <Box className="dashMain">
                            <div className='card cardStudent'>
                                <div className='content'>
                                    <SchoolOutlinedIcon />
                                    <Link to="/student" style={{ textDecoration: "none" }} >
                                        <p>Students</p>
                                    </Link>
                                </div>
                                <p className='count'>{totalCourse}</p>
                            </div>
                            <div className='card cardCourse'>
                                <div className='content'>
                                    <BookmarkBorderOutlinedIcon />
                                    <p>Course</p>
                                </div>
                                <p className='count'>{totalCourse}</p>
                            </div>
                            <div className='card cardPayments'>
                                <div className='content'>
                                    <LocalAtmOutlinedIcon />
                                    <p>Payments</p>
                                </div>
                                <p className='count'>{totalCourse}</p>
                            </div>
                            <div className='card cardUsers'>
                                <div className='content'>
                                    <Person2OutlinedIcon />
                                    <p>Users</p>
                                </div>
                                <p className='count'>{totalCourse}</p>
                            </div>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard
