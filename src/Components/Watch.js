import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectModalNav, toggleModalNav } from './../Redux/preferencesSlice'
import { Link } from "react-router-dom";
import { ButtonBase } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Modal from 'react-modal';
import SideNavMaximized from './SideNav_Maximized'
import './../StyleSheets/Watch.css'

function Watch() {
    const modalNav = useSelector(selectModalNav)
    const dispatch = useDispatch()
    const [initialized, toggleInitialized] = useState(false)
    const [sideNav, toggleSideNav] = useState(false)

    useEffect(() => {
        Modal.setAppElement('body')
        initialized ? toggleSideNav(!sideNav) : toggleInitialized(true)
    }, [modalNav]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='Watch'>
            <Modal isOpen={sideNav} onRequestClose={() => {dispatch(toggleModalNav())}} closeTimeoutMS={200}>
                <div className="sideNav__header">
                    <ButtonBase centerRipple={true} onClick={() => {dispatch(toggleModalNav())}}>
                        <MenuIcon/>
                    </ButtonBase>

                    <Link to='/'>
                        <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
                    </Link>
                </div>
                <SideNavMaximized toggleModalNav={() => {dispatch(toggleModalNav)}}/>
            </Modal>
        </div>
    )
}

export default Watch
