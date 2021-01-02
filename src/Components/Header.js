import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { auth, provider } from './../Firebase/firebase'
import { ButtonBase } from '@material-ui/core'
import { selectUser } from './../Redux/userSlice'
import { toggleModalNav, toggleSideNav } from './../Redux/preferencesSlice'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import "./../StyleSheets/Header.css"

function Header() {
    const dispatch = useDispatch()
    const location = useLocation()
    const [search, setSearch] = useState("")
    const [searchActive, setSearchActive] = useState(false)
    const searchMediaQuery = useMediaQuery({ query: '(max-width: 657px)' })
    const sideNavMaxMediaQuery = useMediaQuery({ query: '(max-width: 1313px)' })
    const user = useSelector(selectUser)

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Button Clicked")
    }

    const handleSignIn = () => {
        auth.signInWithRedirect(provider).catch((error) => {
            console.log(error)
        });
    }

    function HeaderButton({ Icon, onClick, menu }) {
        const [menuOpen, setMenu] = useState(false)

        return (
            <div className="headerButton" onClick={onClick}>
                <ButtonBase centerRipple={true}>
                    <Icon/>
                </ButtonBase>
                {menuOpen && menu}
            </div>
        )
    }

    function HeaderLeft() {
        return (
            <div className="headerLeft">
                <HeaderButton Icon={MenuIcon} onClick={(location.pathname === '/watch' || sideNavMaxMediaQuery) ? () => {dispatch(toggleModalNav())} : () => {dispatch(toggleSideNav())}}/>

                <Link to='/'>
                        <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
                </Link>
            </div>
        )
    }

    function HeaderMiddle() {
        return (
            <div className="headerMiddle">
                {searchMediaQuery && <HeaderButton Icon={ArrowBackIcon} onClick={() => setSearchActive(false)}/>}

                <form className="headerMiddle__form" onSubmit={handleSearch}>
                    <input className="headerMiddle__input" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <button className="headerMiddle__button" type="submit">
                        <SearchIcon type="headerMiddle__submit"/>
                    </button>
                </form>
            </div>
        )
    }

    function HeaderRight() {
        const [displayAccountMenu, setAccountMenu] = useState(false)

        function AccountMenu() {
            
        }

        return (
            <div className="headerRight">
                {searchMediaQuery && <HeaderButton Icon={SearchIcon} onClick={() => setSearchActive(true)}/>}

                <div className="headerRight__icons">
                    <HeaderButton Icon={VideoCallIcon}/>
                    <HeaderButton Icon={AppsIcon}/>
                    { user ? <HeaderButton Icon={NotificationsIcon}/> : <HeaderButton Icon={MoreVertIcon}/> }
                </div>
                
                { user ?
                    <Avatar src={user.photoURL} alt={user.displayName}/>
                :
                    <div className='headerRight__signin' onClick={handleSignIn}>
                        <AccountCircleIcon/>
                        <span>SIGN IN</span>
                    </div>
                }
            </div>
        )
    }

    return (
        <div className="header">
            {(!searchActive || !searchMediaQuery) && <HeaderLeft/>}
            {(searchActive || !searchMediaQuery) && <HeaderMiddle/>}
            {(!searchActive || !searchMediaQuery) && <HeaderRight/>}
        </div>
    )
}

export default Header
