import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { ButtonBase } from '@material-ui/core'
import { toggleModalNav, toggleSideNav } from './../Redux/preferencesSlice'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import "./../StyleSheets/Header.css"

function Header() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [searchActive, setSearchActive] = useState(false)
    const location = useLocation()
    const searchMediaQuery = useMediaQuery({ query: '(max-width: 657px)' })
    const sideNavMaxMediaQuery = useMediaQuery({ query: '(max-width: 1313px)' })

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Button Clicked")
    }

    const renderLeft = () => {
        return (
            <div className="header__left">
                <ButtonBase centerRipple={true} onClick={(location.pathname === '/watch' || sideNavMaxMediaQuery) ? () => {dispatch(toggleModalNav())} : () => {dispatch(toggleSideNav())}}>
                    <MenuIcon/>
                </ButtonBase>

                <Link to='/'>
                        <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
                </Link>
            </div>
        )
    }

    const renderMiddle = () => {
        return (
            <div className="header__middle">
                <div className={searchMediaQuery ? "middle__visible" : "middle__hidden"} onClick={() => setSearchActive(false)}>
                    <ButtonBase centerRipple={true}>
                        <ArrowBackIcon/>
                    </ButtonBase>
                </div>

                <form className="middle__form" onSubmit={handleSearch}>
                    <input className="middle__input" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <button className="middle__button" type="submit">
                        <SearchIcon type="submit"/>
                    </button>
                </form>
            </div>
        )
    }

    const renderRight = () => {
        return (
            <div className="header__right">
                <div className={searchMediaQuery ? "right__visible" : "right__hidden"} onClick={() => setSearchActive(true)}>
                    <SearchIcon/>
                </div>

                <div className="right__icons">
                    <ButtonBase centerRipple={true}>
                        <AppsIcon/>
                    </ButtonBase>
                    <ButtonBase centerRipple={true}>
                        <VideoCallIcon/>
                    </ButtonBase>
                    <ButtonBase centerRipple={true}>
                        <MoreVertIcon/>
                    </ButtonBase>
                </div>
                
                <div className='right__signin'>
                    <AccountCircleIcon/>
                    <span>SIGN IN</span>
                </div>
            </div>
        )
    }

    return (
        <div className="header">
            {(!searchActive || !searchMediaQuery) && renderLeft()}
            {(searchActive || !searchMediaQuery) && renderMiddle()}
            {(!searchActive || !searchMediaQuery) && renderRight()}
        </div>
    )
}

export default Header
