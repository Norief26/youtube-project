import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ButtonBase } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Modal from 'react-modal';
import SideNavMaximized from './SideNav_Maximized'
import './../StyleSheets/Watch.css'

function Watch({modalNav, toggleModalNav}) {
    const [initialized, toggleInitialized] = useState(false)
    const [sideNav, toggleSideNav] = useState(false)

    useEffect(() => {
        Modal.setAppElement('body')
        initialized ? toggleSideNav(!sideNav) : toggleInitialized(true)
    }, [modalNav]) // eslint-disable-line react-hooks/exhaustive-deps

    const toggleModal = () => {
        toggleSideNav(!sideNav)
    }

    return (
        <div className='Watch'>
            <Modal isOpen={sideNav} onRequestClose={toggleModal} closeTimeoutMS={200}>
                <div className="sideNav__header">
                    <ButtonBase centerRipple={true} onClick={toggleModalNav}>
                        <MenuIcon/>
                    </ButtonBase>

                    <Link to='/'>
                        <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
                    </Link>
                </div>
                <SideNavMaximized toggleModalNav={toggleModalNav}/>
            </Modal>
            <p>Hello</p>
        </div>
    )
}

export default Watch
