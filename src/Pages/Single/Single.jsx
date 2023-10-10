import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './Single.scss'
import Chart from '../../Components/Chart/Chart'
import DataTable from '../../Components/DataTable/DataTable'


const Single = () => {
  return (
    <div className='Single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editBtn">
              <button>Edit</button></div>
            <h1 className="title">INFORMATION</h1>
            <div className="item">
              <img className='itemImg' src="/sir.jpeg" alt="img" />

              <div className="detail">
                <h1 className='itemTitle'>Dr M.Ghazanfar-Ullah Khan</h1>
                <div className="detailItem">
                  <span className="itemKey">Roll:</span>
                  <span className="itemValue">HOD- ADMIN</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Courses:</span>
                  <span className="itemValue">DSA & DIP </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">Computer Systems Engineering</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mgukhan@uit.edu</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <Chart aspect={2.7/1}/>
          </div>

        </div>

        <div className="bottom">
        <h1 className="title">Users:</h1>

          <DataTable/>

        </div>
        
    
    </div>
    </div>
  )
}

export default Single