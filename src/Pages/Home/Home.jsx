import React from 'react'
import './Home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Widgets from '../../Components/Widgets/Widgets'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Table from '../../Components/Table/Table'
import List from '../../Components/Table/Table'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="students" />
          <Widgets type="courses" />
          <Widgets type="teacher" />
          <Widgets type="registrations" />

        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={2.9/0.9} />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            <HowToRegIcon className='icon' />
           <h3> New Applicants For Registration</h3>
          </div>
          <List/>

        </div>
      </div>
    </div>
  )
}

export default Home