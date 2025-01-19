/* eslint-disable react/prop-types */
import './Header.css'
import Menu from '../Menu'
import title from './TheOneMinistries.gif'; // Import the image using ES6 import
import { useEffect } from 'react';


const Header = ({user}) => {
    useEffect(() => {
        console.log('Header user:', user)
    },[user]);
    return (
        <header className="p-4 app-header">
            <div className='header-group'>
            <img src={title} alt='title' height='100vh' className=' p-0 m-0 header-title' />
            {/* <h1 className='header-title'>The One Ministries</h1> */}
            {/* <h5>Training Center</h5> */}
            </div>
            <Menu user={user}/>
        </header>
    )
}

export default Header
