import React, { useState } from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [bar, setBar] = useState(true)
    const [close, setClose] = useState(false)

    return (
        <div className='navbar'>
            <div className="navbar_wrapper">
                <div className="navbarLeft">
                    <ArrowCircleLeftOutlinedIcon />
                </div>
                <div className="navRight">
                    <div className='searchBox'>
                        <input type="text" placeholder='Search...' />
                        <SearchOutlinedIcon />
                    </div>
                    <NotificationsNoneOutlinedIcon />
                </div>
            </div>
            <div div className="Navbar" >
                <div className={`nav-items ${isOpen && "open"}`}>
                    <ul>
                        <li>
                            <HomeOutlinedIcon />
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <BookmarkBorderOutlinedIcon />
                            <a href="/">Course</a>
                        </li>
                        <li>
                            <SchoolOutlinedIcon />
                            <a href="/student">Student</a>
                        </li>
                        <li>
                            <LocalAtmOutlinedIcon />
                            <a href="/">Payment</a>
                        </li>
                        <li>
                            <DescriptionOutlinedIcon />
                            <a href="/">Report</a>
                        </li>
                        <li>
                            <DisplaySettingsOutlinedIcon />
                            <a href="/">Settings</a>
                        </li>
                        <li>
                            <a href='/'>Logout</a>
                            <LogoutOutlinedIcon />
                        </li>
                    </ul>


                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="menubar"
                        onClick={() => {
                            setBar(!bar)
                            // setClose(true)
                        }}>
                        {bar && (
                            <MenuIcon onClick={() => setClose(!close)} />
                        )}
                        {
                            close && (
                                <CloseIcon onClick={() => {
                                    setClose(!close)
                                    setBar(!bar)
                                }}
                                />
                            )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
