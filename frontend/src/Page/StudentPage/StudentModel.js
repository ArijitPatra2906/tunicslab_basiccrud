import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import "./StudentPage.css"
import axios from 'axios';


function StudentModel({ open, handleClose, }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [enrollNo, setEnrollNo] = useState("")
    const [date, setDate] = useState("")

    const create = async () => {
        try {

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const { data } = await axios.post(
                "http://localhost:8000/student",
                { name, email, phone, enrollNo, date },
                config
            );
            console.log(data);
            window.location.reload()


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
                        <button className='submit' onClick={create}>
                            Submit
                        </button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default StudentModel
