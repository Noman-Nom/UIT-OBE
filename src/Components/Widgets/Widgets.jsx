import React from 'react'
import './Widgets.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';



const Widgets = ({type}) => {
 let data;
let amount = 2434;
const diff = 20

 switch(type){
    case "students":
        data= {
            title :"STUDENTS",
           
            link: "See All  Students",
            icon: <AccountBoxIcon className='icon'/>
        };
        break;
    case "courses":
        data= {
            title :"COURSES",
            
            link: "See All  Courses",
            icon: < MenuBookIcon className='icon' />
        };
        break;
    case "teacher":
        data= {
            title :"TEACHERS",
          
            link: "See All  Teachers",
            icon: <PersonIcon className='icon'/>
        };
        break;
    case "registrations":
        data= {
            title :"REGISTRATIONS",
          
            link: "See All Registrations",
            icon: <AppRegistrationIcon className='icon'/>
        };
        break;
        default:
            break;

 }

  return (
    <div className='widget'>
        <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                  {amount}
                </span>
                <span className="link">
                {data.link}
                </span>
        </div>
        <div className="right">
            <div className="percentage positive">
         <ArrowUpwardIcon/>
                    
                    {diff}%
            </div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widgets