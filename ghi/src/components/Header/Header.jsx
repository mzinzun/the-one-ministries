import './Header.css'
import Menu from '../Menu'


const Header = () => {
    return (
        <header className="p-4 app-header">
            <div>
            <h1 className='header-title'>Welcome To The One Ministries</h1>
            <h5>Training Center</h5>
            </div>

            <Menu />
        </header>
    )
}

export default Header
