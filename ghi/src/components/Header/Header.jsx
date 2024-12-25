import './Header.css'
import Menu from '../Menu'


const Header = () => {
    return (
        <header className="p-4 app-header">
            <h1 className='header-title'>The One Ministries</h1>
            <Menu />
        </header>
    )
}

export default Header
