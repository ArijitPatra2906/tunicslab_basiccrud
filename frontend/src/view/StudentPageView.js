import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import StudentPage from '../Page/StudentPage/StudentPage'
import "./Style.css"

function StudentPageView() {
    return (
        <div className='student'>
            <Sidebar />
            <div className="studentContainer">
                <Navbar />
                <StudentPage />
            </div>
        </div>
    )
}

export default StudentPageView
