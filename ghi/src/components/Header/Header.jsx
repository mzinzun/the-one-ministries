import './Header.css'
import Menu from '../Menu'
import title from './TheOneMinistries.gif'; // Import the image using ES6 import


const Header = () => {
    return (
        <header className="p-4 app-header">
            <div className='header-group'>
            <img src={title} alt='title' height='100vh' className=' p-0 m-0 header-title' />
            {/* <h1 className='header-title'>The One Ministries</h1> */}
            {/* <h5>Training Center</h5> */}
            </div>

            <Menu />
        </header>
    )
}

export default Header
