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

    function HeaderSection(props) {
        return (
            <div className={props.className}>
                {props.children}
            </div>
        )
    }

    function SearchBar() {
        return(
            <form className="header__searchForm" onSubmit={handleSearch}>
                <input className="header__searchInput" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button className="header__searchButton" type="submit">
                    <SearchIcon type="header__searchSubmit"/>
                </button>
            </form>
        )
    }

    function SignIn() {
        return (
            <div className='header__signIn' onClick={handleSignIn}>
                <AccountCircleIcon/>
                <span>SIGN IN</span>
            </div>
        )
    }

    function HeaderButton(props) {
        const [menuOpen, setMenu] = useState(false)

        return (
            <div className="header__button" onClick={() => {setMenu(!menuOpen)}}>
                <ButtonBase centerRipple={true}>
                    {props.children}
                </ButtonBase>
                {menuOpen && props.menu}
            </div>
        )
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Button Clicked")
    }

    const handleSignIn = () => {
        auth.signInWithRedirect(provider).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="header">
            {(!searchActive || !searchMediaQuery) &&
            <HeaderSection className={"header__left"}>
                <ButtonBase centerRipple={true} onClick={(location.pathname === '/watch' || sideNavMaxMediaQuery) ? () => {dispatch(toggleModalNav())} : () => {dispatch(toggleSideNav())}}>
                    <MenuIcon/>
                </ButtonBase>
                <Link to='/'>
                        <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
                </Link>
            </HeaderSection>
            }

            {(searchActive || !searchMediaQuery) &&
            <HeaderSection className={"header__middle"}>
                {searchMediaQuery &&
                <ButtonBase onClick={() => setSearchActive(false)}>
                    <ArrowBackIcon/>
                </ButtonBase>
                }
                <SearchBar/>
            </HeaderSection>
            }

            {(!searchActive || !searchMediaQuery) &&
            <HeaderSection className={"header__right"}>
                {searchMediaQuery &&
                <ButtonBase onClick={() => setSearchActive(true)}>
                    <SearchIcon/>
                </ButtonBase>
                }
                <HeaderButton>
                    <VideoCallIcon/>
                </HeaderButton>
                <HeaderButton>
                    <AppsIcon/>
                </HeaderButton>
                {user ? 
                <HeaderButton>
                    <NotificationsIcon/>
                </HeaderButton>
                :
                <HeaderButton>
                    <MoreVertIcon/>
                </HeaderButton>
                }
                {user ?
                <HeaderButton>
                    <Avatar src={user.photoURL} alt={user.displayName}/>
                </HeaderButton>
                :
                <SignIn/>
                }
            </HeaderSection>
            }
        </div>
    )
}

export default Header
