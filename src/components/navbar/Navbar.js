import React, {useState} from 'react';
import "./navbar.css"
import SideMenu from "./sideMenu/SideMenu";

const Navbar = ({setBackgroundImage, }) => {
    const [activeMenu, setActiveMenu] = useState(false)

    const handleOnBlur = (e) => {
        setActiveMenu(false)
        e.preventDefault()
    }
    return (
        <div className='navbar__container'>
            <h1 className='navbar__title'>Todo list</h1>
            <button
                className='navbar__button'
                onClick={() => setActiveMenu(!activeMenu)}
            >
                Change background
            </button>
            <SideMenu active={activeMenu} setActive={setActiveMenu} handleOnBlur={handleOnBlur} setBackgroundImage={setBackgroundImage}/>
        </div>
    );
};

export default Navbar;