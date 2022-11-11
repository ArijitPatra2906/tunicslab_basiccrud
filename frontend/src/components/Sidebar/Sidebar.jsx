import React from 'react'
import "./Sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
function Sidebar() {

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <h3 className='sidebar-title'>CRUD OPERATIONS</h3>
                <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <h4>Karthi Madesh</h4>
                <h6>Admin</h6>
            </div>

            <div className="link">
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
                </ul>
            </div>

            <div className='logout'>
                <ul>
                    <li>
                        <a href='/'>Logout</a>
                        <LogoutOutlinedIcon />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
