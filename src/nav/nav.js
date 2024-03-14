import React from 'react'
import logo from '../Images/Instagram_logo.png'
import home from '../Images/Home.png'
import explore from '../Images/explore-tool.svg'
import search from '../Images/Search.png'
import Reels from '../Images/reels.png'
import Messages from '../Images/messages.png'
import Notifications from '../Images/Like.png'
import Icon from '../Images/Add.png'
import More from '../Images/More.png'
import Threads from '../Images/Threads.png'
import './nav.css'

const nav = () => {
  return (
    <div className='d-flex flex-column box'>
        <div className='logo'>
        <img className="sidenav-logo" src={logo} alt="Instagram Logo"/>
        </div>
        <div className='d-flex justify-content-between flex-column list-box'>
            <ul>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={home}/></span> Home</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={search}/></span> Search</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={explore}/></span> Explore</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={Reels}/></span> Reels</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={Messages}/></span> Messages</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={Notifications}/></span> Notifications</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={Icon}/></span> Create</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={search}/></span> Profile</button></li>
            </ul>

            <ul className='threads'>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={Threads}/></span> Threads</button></li>
                <li className='col-12'><button><span className='icon-tag'><img className="icons" src={More}/></span> More</button></li>
            </ul>
        </div>
        
            
        
    </div>
  )
}

export default nav