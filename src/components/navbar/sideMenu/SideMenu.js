import React from 'react';
import "./sideMenu.css"

const SideMenu = ({setActive, active}) => {
    return (
        <div className={active ? 'sideMenu__container active' : 'sideMenu__container'}>
            <div className="blur"></div>
            <div className="menu__info">
                <p className='menu__title'>Change color</p>
                <button className='menu__button' onClick={() => setActive(false)}>X</button>
            </div>
            <div className="menu__content">
                <div className="menu__item"></div>
                <div className="menu__item"></div>
            </div>
        </div>
    );
};

export default SideMenu;