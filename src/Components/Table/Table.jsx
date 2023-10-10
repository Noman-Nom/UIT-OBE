import React from 'react'
import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
//  dummy  and static data 

const rows = [
  {
    id: 1,
    seatNo:"CS-20303",
    rollNo: "19B-013-CE",
    name:"Muhammad Noman",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
    



  },
  {
   
    id: 2,
    seatNo:"CS-20303",
    rollNo: "20B-018-CE",
    name:"Zainab",
    img: "/sample.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',



  },
  {
    id: 3,
    seatNo:"CS-20303",
    rollNo: "20B-029-CE",
    name:"Sheraz Ahmed",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
  

  },
  {
    id: 4,
    seatNo:"CS-20303",
    rollNo: "20B-003-CE",
    name:"Syed Moiz Ali",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
    

  },
  {
    id: 5,
    seatNo:"CS-20303",
    rollNo: "20B-035-CE",
    name:"Raza Muhammad",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
    



  },
  {
  
    id: 6,
    seatNo:"CS-20303",
    rollNo: "20B-038-CE",
    name:"Ayesha Usman",
    img: "/sample.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
  



  },
  {
    id: 7,
    seatNo:"CS-20303",
    rollNo: "20B-025-CE",
    name:"Ibraheem",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
    

  },
  {
    id:8 ,
    seatNo:"CS-20303",
    rollNo: "20B-241-CE",
    name:"Ahmed Raza",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
  

  },
  {
    id:8 ,
    seatNo:"CS-20303",
    rollNo: "20B-022-CE",
    name:"Waqas Akhter",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
  

  },
  {
    id:9 ,
    seatNo:"CS-20303",
    rollNo: "20B-056-CE",
    name:"Moiz ur Rehman",
    img: "/noman.jpg",
    batch: "2020",
    sumester: '7th',
    field: 'EL-CSE',
  

  },
]

  return (
  

<TableContainer className='Table' component={Paper}>
      <Table  >
        <TableHead>
          <TableRow  >
            <TableCell className='tableCell'>ID</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Roll-No</TableCell>
            <TableCell className='tableCell'>Seat-No</TableCell>
            <TableCell className='tableCell'>Batch</TableCell>
            <TableCell className='tableCell'>Sumester</TableCell>
            <TableCell className='tableCell'>field</TableCell>
            <TableCell className='tableCell'>View Detail</TableCell>
            
        
            
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
             
            >
              <TableCell className='tableCell'  component="th" scope="row">{row.id} </TableCell>
              <TableCell className='tableCell' align="left">
                <div className="rowWrapper">
                  <img src={row.img} alt="" className="iamge" />
                  {row.name}
                </div>
                  </TableCell>
              
              <TableCell className='tableCell' align="left">{row.rollNo}</TableCell>
              <TableCell className='tableCell' align="left">{row.seatNo}</TableCell>
              <TableCell className='tableCell' align="left">{row.batch}</TableCell>
              <TableCell className='tableCell' align="left">{row.sumester}</TableCell>
              <TableCell className='tableCell' align="left">{row.field}</TableCell>
              <TableCell className='tableCell' align="left"><button className='btn'>View</button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
  )
}

export default List