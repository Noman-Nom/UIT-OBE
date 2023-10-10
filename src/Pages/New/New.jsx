import React from 'react'
import { useState } from 'react'
import './New.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const New = ({inputs, title}) => {

  const [file, setFile] = useState("")
  console.log(file)

  
  return (
    <div className="New">
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
                <img src={file ? URL.createObjectURL(file): '/noimg.jpg'} alt="upload image" />
            </div>
            <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor='file'> Image:<CloudUploadIcon className='icon'/></label>
                    <input   onChange={e=>setFile(e.target.files[0])} type="file" id="file" style={{display:"none"}}  />
                  </div>


                {
                    inputs.map((input)=>(

                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                    
                      ))
                }
                  
                  <button>Send</button>
                </form>
            </div>
          </div>
        </div>

    </div>
  )
}

export default New