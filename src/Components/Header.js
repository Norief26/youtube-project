import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import "./../StyleSheets/Header.css"

function Header() {
    const [search, setSearch] = useState("")
    const [searchActive, setSearchActive] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Button Clicked")
    }

    const renderLeft = () => {
        return (
            <div className="header__left">
                <MenuIcon/>
                <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
            </div>
        )
    }

    const renderMiddle = () => {
        return (
            <div className="header__middle">
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
                <div className="right__hidden">
                    <SearchIcon/>
                </div>
                <div className="right__icons">
                    <AppsIcon/>
                    <VideoCallIcon/>
                    <MoreVertIcon/>
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
            {!searchActive && renderLeft()}
            {renderMiddle()}
            {!searchActive && renderRight()}
        </div>
    )
}

export default Header
