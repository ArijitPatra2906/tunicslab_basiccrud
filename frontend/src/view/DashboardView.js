import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Dashboard from '../Page/Dashboard/Dashboard'
import "./Style.css"

function DashboardView() {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="dashboardContainer">
                <Navbar />
                <Dashboard />
            </div>
        </div>
    )
}

export default DashboardView