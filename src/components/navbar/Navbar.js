import React, {useState} from 'react';
import "./navbar.css"
import SideMenu from "./sideMenu/SideMenu";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    return (
        <div className='navbar__container'>
            <h1 className='navbar__title'>Todo list</h1>
            <button
                className='navbar__button'
                onClick={() => setActiveMenu(!activeMenu)}
            >
                Change background
            </button>
            <SideMenu active={activeMenu} setActive={setActiveMenu}/>
        </div>
    );
};

export default Navbar;