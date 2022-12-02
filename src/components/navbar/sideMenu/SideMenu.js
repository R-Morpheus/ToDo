import React, {useEffect, useState} from 'react';
import "./sideMenu.css"
import colors from "../../UI/utils/color";
import {CSSTransition} from "react-transition-group";
import {getImages} from "../../store/imageApi";

const SideMenu = ({setActive, active, handleOnBlur, setBackgroundImage}) => {
    const [openOptionColor, setOpenOptionColor] = useState(false)
    const [openOptionImage, setOpenOptionImage] = useState(false)
    const [images, setImages] = useState([])

    const getListOfImage = async () => {
        const listOfImages = await getImages()
        console.log(listOfImages)
        setImages(listOfImages)
    }

    useEffect(() => {
        getListOfImage()
    }, [])


    return (
        <div className={active ? 'sideMenu__container active' : 'sideMenu__container'}>
            <div className="blur"></div>
            <div className="menu__info">
                <p className='menu__title'>Change color</p>
                <button className='menu__button' onClick={() => setActive(false)}>X</button>
            </div>
            <div className="menu__content">
                <div className="menu__item__one"
                     onClick={() => {
                         setOpenOptionImage(!openOptionImage);
                         setOpenOptionColor(false)
                }}></div>
                <div className="menu__item__two"
                     onClick={() => {
                         setOpenOptionColor(!openOptionColor);
                         setOpenOptionImage(false)
                     }}></div>
            </div>
            {openOptionImage ?
                <CSSTransition classNames='alert' in={openOptionImage} timeout={600} unmountOnExit>
                    <div className="menu__images">
                        {images.map((image, index) => {
                            return <div
                                className='menu__item__image'
                                key={index}
                                onClick={() => setBackgroundImage(image.full)}
                                style={{
                                    backgroundImage: `url(${image.thumb})`
                            }}>
                            </div>
                        })}
                    </div>
                </CSSTransition>
                :
                <CSSTransition classNames='alert' in={openOptionColor} timeout={600} unmountOnExit>
                    <div className="menu__colors">
                        {colors.map((color, index) => {
                            return <div
                                className='menu__item__color'
                                key={index}
                                style={{backgroundColor: color}}
                                onClick={() => setBackgroundImage(color)}
                            >
                            </div>
                        })}
                    </div>
                </CSSTransition>
            }
        </div>
    );
};

export default SideMenu;