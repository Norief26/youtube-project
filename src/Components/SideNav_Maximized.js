import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { ButtonBase } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FlagIcon from '@material-ui/icons/Flag';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MenuIcon from '@material-ui/icons/Menu';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PanoramaIcon from '@material-ui/icons/Panorama';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import SettingsIcon from '@material-ui/icons/Settings';
import SideNavRow from "./SideNav_Row"
import ShopIcon from '@material-ui/icons/Shop';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import TheatersIcon from '@material-ui/icons/Theaters';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import WifiIcon from '@material-ui/icons/Wifi';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./../StyleSheets/SideNav_Maximized.css"

function SideNav_Maximized() {
    const [pathURL, setPathURL] = useState(window.location.pathname)
    const location = useLocation()

    useEffect(() => {
        setPathURL(location.pathname)
    }, [location])
    
    return (
        <div className="sideNav_maximized">
            <div className="sideNav__header">
                <ButtonBase centerRipple={true}>
                    <MenuIcon/>
                </ButtonBase>
                <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
            </div>
            
            <div className="sideNav__section">
                <SideNavRow Icon={HomeIcon} title={"Home"} linkPath={"/"} selected={pathURL === "/"} maximized={true}/>
                <SideNavRow Icon={WhatshotIcon} title={"Trending"} linkPath={"/feed/trending"} selected={pathURL === "/feed/trending"} maximized={true}/>
                <SideNavRow Icon={SubscriptionsIcon} title={"Subscriptions"} linkPath={"/feed/subscriptions"} selected={pathURL === "/feed/subscriptions"} maximized={true}/>
            </div>

            <div className="sideNav__section">
                <SideNavRow Icon={VideoLibraryIcon} title={"Library"} linkPath={"/feed/library"} selected={pathURL === "/feed/library"} maximized={true}/>
                <SideNavRow Icon={HistoryIcon} title={"History"} linkPath={"/feed/history"} selected={pathURL === "/feed/history"} maximized={true}/>
            </div>


            <div className="sideNav__section">
                <p className="signin__text">Sign in to like videos, comment, and subscribe.</p>
                <div className='signin__button'>
                    <AccountCircleIcon/>
                    <span>SIGN IN</span>
                </div>
            </div>

            <div className="sideNav__section">
                <span className='section__header'>BEST OF YOUTUBE</span>
                <SideNavRow Icon={MusicNoteIcon} title={"Music"} linkPath={"/channel/music"} selected={pathURL === "/channel/music"} maximized={true} outline={true}/>
                <SideNavRow Icon={SportsSoccerIcon} title={"Sports"} linkPath={"/channel/sports"} selected={pathURL === "/channel/sports"} maximized={true} outline={true}/>
                <SideNavRow Icon={SportsEsportsIcon} title={"Gaming"} linkPath={"/channel/gaming"} selected={pathURL === "/channel/gaming"} maximized={true} outline={true}/>
                <SideNavRow Icon={TheatersIcon} title={"Movies & Shows"} linkPath={"/channel/movies"} selected={pathURL === "/channel/movies"} maximized={true} outline={true}/>
                <SideNavRow Icon={ReceiptIcon} title={"News"} linkPath={"/channel/news"} selected={pathURL === "/channel/news"} maximized={true} outline={true}/>
                <SideNavRow Icon={LiveTvIcon} title={"Live"} linkPath={"/channel/live"} selected={pathURL === "/channel/live"} maximized={true} outline={true}/>
                <SideNavRow Icon={HowToRegIcon} title={"Fashion & Beauty"} linkPath={"/channel/fashion"} selected={pathURL === "/channel/fashion"} maximized={true} outline={true}/>
                <SideNavRow Icon={EmojiObjectsIcon} title={"Learning"} linkPath={"/channel/learning"} selected={pathURL === "/channel/learning"} maximized={true} outline={true}/>
                <SideNavRow Icon={ShopIcon} title={"Spotlight"} linkPath={"/channel/spotlight"} selected={pathURL === "/channel/spotlight"} maximized={true} outline={true}/>
                <SideNavRow Icon={PanoramaIcon} title={"360\u00B0 Video"} linkPath={"/channel/360video"} selected={pathURL === "/channel/360video"} maximized={true} outline={true}/>
            </div>

            <div className="sideNav__section">
                <SideNavRow Icon={AddIcon} title={"Browse channels"} linkPath={"/feed/browse"} selected={pathURL === "/feed/browse"} maximized={true} outline={true}/>
            </div>

            <div className="sideNav__section">
                <span className='section__header'>MORE FROM YOUTUBE</span>
                <SideNavRow Icon={YouTubeIcon} title={"Youtube Premium"} linkPath={"/premium"} selected={pathURL === "/premium"} maximized={true}/>
                <SideNavRow Icon={WifiIcon} title={"Live"} linkPath={"/channel/live"} selected={pathURL === "/channel/live"} maximized={true}/>
            </div>

            <div className="sideNav__section">
                <SideNavRow Icon={SettingsIcon} title={"Settings"} linkPath={"/account"} selected={pathURL === "/account"} maximized={true}/>
                <SideNavRow Icon={FlagIcon} title={"Report history"} linkPath={"/reporthistory"} selected={pathURL === "/reporthistory"} maximized={true}/>
                <SideNavRow Icon={HelpOutlineIcon} title={"Help"} linkPath={"/help"} selected={pathURL === "/help"} maximized={true}/>
                <SideNavRow Icon={ReportProblemIcon} title={"Send feedback"} linkPath={"feedback"} selected={pathURL === "feedback"} maximized={true}/>
            </div>

            <div className="sideNav__footer">
                <div className="footer__top">
                    <span>About Press Copyright</span>
                    <span>Contact us Creators</span>
                    <span>Advertise Developers</span>
                </div>

                <div className="footer__middle">
                    <span>Terms Privacy Policy & Safety</span>
                    <span>How Youtube works</span>
                    <span>Test new features</span>
                </div>

                <div className="footer__bottom">
                    <span>© 2020 Google LLC</span>
                </div>
            </div>

        </div>
    )
}

export default SideNav_Maximized
