import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { auth, provider } from './../Firebase/firebase'
import { ButtonBase, Switch } from '@material-ui/core'
import { selectUser } from './../Redux/userSlice'
import { toggleModalNav, toggleSideNav } from './../Redux/preferencesSlice'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Avatar from '@material-ui/core/Avatar';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import SearchIcon from '@material-ui/icons/Search';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import SettingsIcon from '@material-ui/icons/Settings';
import TranslateIcon from '@material-ui/icons/Translate';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import "./../StyleSheets/Header.css"

function Header() {
    const dispatch = useDispatch()
    const location = useLocation()
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
        const [search, setSearch] = useState("")
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

        const hideMenu = () => {
            setMenu(false)
        }

        return (
            <div className="header__button">
                <div className="button__icon" onClick={() => {setMenu(!menuOpen)}}>
                    <ButtonBase centerRipple={true}>
                        {props.children}
                    </ButtonBase>
                </div>
                {menuOpen && <props.menu hideMenu={hideMenu}/>}
            </div>
        )
    }

    function AccountMenu({hideMenu}) {
        const ref = useRef(null)
        const [nestedMenu, setNestedMenu] = useState(null)

        useEffect(() => {
            document.addEventListener('click', closeMenu, false)
            return () => {
                document.removeEventListener('click', closeMenu, false)
            }
        }, []) // eslint-disable-line react-hooks/exhaustive-deps

        const closeMenu = (e) => {
            if ((ref.current && !ref.current.contains(e.target))) {
                var parentElement = e.target.parentElement
                while(parentElement !== null) {
                    if((parentElement.className === "header__mainMenu") || (parentElement.className === "header__switchAccountMenu") || (parentElement.className === "header__appearanceMenu") || (parentElement.className ==="header__restrictedMenu")) {
                        return
                    }
                    parentElement = parentElement.parentElement
                }
                hideMenu()
            }
        }

        function AccountMenuSection(props) {
            return (
                <div className="accountMenu__section">
                    {props.children}
                </div>
            )
        }

        function AccountMenuRow({ Icon, title, onClick, expandIcon}) {
            return (
                <div className='accountMenuRow' onClick={onClick}>
                    <div className="accountMenu__row">
                            {Icon && <Icon/>}
                            <span>{title}</span>
                    </div>
                    {expandIcon && <ArrowForwardIosIcon/>}
                </div>
            )
        }

        function AppearanceMenu() {
            return (
                <div className="header__appearanceMenu">
                    <div className="appearanceMenu__header">
                        <ArrowBackIcon onClick={() => {setNestedMenu(null)}}/>
                        <span>Appearance</span>
                    </div>
                    <AccountMenuSection>
                        <span className="appearanceMenu__sectionHeader">Setting applies to this browser only</span>
                        <AccountMenuRow Icon={CheckBoxOutlineBlankIcon} title={"Use device theme"}/>
                        <AccountMenuRow Icon={CheckBoxIcon} title={"Dark theme"}/>
                        <AccountMenuRow Icon={CheckBoxOutlineBlankIcon} title={"Light Theme"}/>
                    </AccountMenuSection>
                </div>
            )
        }

        function RestrictedMenu() {
            const [checked, toggleChecked] = useState(false)
            return (
                <div className="header__restrictedMenu">
                    <div className="restrictedMenu__header">
                        <ArrowBackIcon onClick={() => {setNestedMenu(null)}}/>
                        <span>Restricted Mode</span>
                    </div>
                    <AccountMenuSection>
                        <span className="restrictedMenu__text">This helps hide potentially mature videos. No filter is 100% accurate.</span>
                        <span className="restrictedMenu__text">This setting only applies to this browser</span>
                        <div className="restrictedMenu__toggle">
                            <span>ACTIVATE RESTRICTED MODE</span>
                                <Switch size="small" checked={checked} onChange={() => {toggleChecked(!checked)}} />
                        </div>
                    </AccountMenuSection>
                </div>
            )
        }

        function SwitchAccountMenu() {
            return (
                <div className="header__switchAccountMenu">
                    <div className="switchAccountMenu__header">
                        <ArrowBackIcon onClick={() => {setNestedMenu(null)}}/>
                        <span>Accounts</span>
                    </div>
                    <AccountMenuSection>
                        <span className="switchAccountMenu__userEmail">{user.email}</span>
                        <div className="switchAccountMenu__userSection">
                            <Avatar src={user.photoURL} alt={user.displayName}/>
                            <div className="switchAccountMenu__userInfo">
                                <span>{user.displayName}</span>
                                <span>No channel</span>
                            </div>
                        </div>
                    </AccountMenuSection>
                    <AccountMenuSection>
                        <AccountMenuRow Icon={AccountCircleIcon} title={"Add Account"}/>
                        <AccountMenuRow Icon={ExitToAppIcon} title={"Sign out"} onClick={handleSignOut}/>
                    </AccountMenuSection>
                </div>
            )
        }

        function MainMenu() {
            return (
                <div className="header__mainMenu">
                    <div className="accountMenu__header">
                        <Avatar src={user.photoURL} alt={user.displayName}/>
                        <div className="accountMenu__userInfo">
                            <span className="userInfo__displayName">{user.displayName}</span>
                            <span className="userInfo__email">{user.email}</span>
                        </div>
                    </div>
                    <AccountMenuSection>
                        <AccountMenuRow Icon={AccountBoxIcon} title={"Create a channel"}/>
                        <AccountMenuRow Icon={MonetizationOnIcon} title={"Purchases and memberships"} linkPath={""}/>
                        <AccountMenuRow Icon={SettingsApplicationsIcon} title={"Youtube Studio"} linkPath={""}/>
                        <AccountMenuRow Icon={GroupIcon} title={"Switch Account"} onClick={() =>{setNestedMenu("Switch Account")}} expandIcon={true}/>
                        <AccountMenuRow Icon={ExitToAppIcon} title={"Sign out"} linkPath={""} onClick={handleSignOut}/>
                    </AccountMenuSection>
                    <AccountMenuSection>
                        <AccountMenuRow Icon={Brightness4Icon} title={"Appearance: Dark"} linkPath={""} onClick={() => {setNestedMenu("Appearance")}} expandIcon={true}/>
                        <AccountMenuRow Icon={TranslateIcon} title={"Language: English"} linkPath={""} expandIcon={true}/>
                        <AccountMenuRow Icon={LanguageIcon} title={"Location: United States"} linkPath={""} expandIcon={true}/>
                        <AccountMenuRow Icon={SettingsIcon} title={"Settings"} linkPath={""}/>
                        <AccountMenuRow Icon={SecurityIcon} title={"Your data in YouTube"} linkPath={""}/>
                        <AccountMenuRow Icon={HelpOutlineIcon} title={"Help"} linkPath={""}/>
                        <AccountMenuRow Icon={ReportProblemIcon} title={"Send feedback"} linkPath={""}/>
                        <AccountMenuRow Icon={KeyboardIcon} title={"Keyboard shortcuts"} linkPath={""}/>
                    </AccountMenuSection>
                    <AccountMenuSection>
                        <AccountMenuRow title={"Restricted Mode: Off"} linkPath={""} onClick={() => {setNestedMenu("Restricted")}} expandIcon={true}/>
                    </AccountMenuSection>
                </div>
            )
        }

        const switchMenu = () => {
            if(nestedMenu === "Appearance") {
                return <AppearanceMenu/>
            } else if(nestedMenu === "Switch Account") {
                return <SwitchAccountMenu/>
            } else if(nestedMenu === "Restricted") {
                return <RestrictedMenu/>
            }
        }

        return (
            <div className="header__accountMenu" ref={ref}>
                {nestedMenu ? switchMenu() : <MainMenu/>}
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

    const handleSignOut = () => {
        auth.signOut().catch((error) => {
            console.log(error)
        })
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
                    <HeaderButton menu={AccountMenu}>
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
