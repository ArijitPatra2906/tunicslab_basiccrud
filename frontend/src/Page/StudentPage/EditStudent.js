import { Box, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function EditStudent() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [enrollNo, setEnrollNo] = useState("")
    const [date, setDate] = useState("")

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const getStudent = async () => {
        const result = await axios.get("https://tunicslab.herokuapp.com/student/" + path);
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setEnrollNo(result.data.enrollNo)
        setDate(result.data.date)
    };
    useEffect(() => {
        getStudent()
    }, [])

    const handleUpdate = async () => {
        try {
            await axios.put("https://tunicslab.herokuapp.com/student/" + path, {
                name,
                email,
                phone,
                enrollNo,
                date
            });
            window.location.replace("/student")
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <div>
            <div className='student'>
                <Sidebar />
                <div className="studentContainer">
                    <Navbar />
                    <Box className='modal_main' p={5}>
                        <form >
                            <Typography pt={2} pb={3} fontWeight="700" fontSize="26px" className='headline' style={{ textAlign: "left", color: "black", marginTop: "-40px" }}>Add / Edit Student</Typography>
                            <div>
                                <label>Name</label>
                                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input required type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div>
                                <label>Enroll No</label>
                                <input required type="number" value={enrollNo} onChange={(e) => setEnrollNo(e.target.value)} />
                            </div>
                            <div>
                                <label>Date of addmission</label>
                                <input required type="text" value={date} onChange={(e) => setDate(e.target.value)} /></div>
                            <button className='submit' onClick={handleUpdate}>
                                Submit
                            </button>
                        </form>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default EditStudent
