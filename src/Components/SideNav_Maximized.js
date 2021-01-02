import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { auth, provider } from './../Firebase/firebase'
import { Link } from "react-router-dom";
import { selectUser } from './../Redux/userSlice'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FlagIcon from '@material-ui/icons/Flag';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PanoramaIcon from '@material-ui/icons/Panorama';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import SettingsIcon from '@material-ui/icons/Settings';
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
    const user = useSelector(selectUser)

    const handleSignIn = () => {
        auth.signInWithRedirect(provider).catch((error) => {
            console.log(error)
        });
    }

    function SideNavRow({ Icon, title, linkPath, selected, outline}) {
        return (
            <Link className="link" to={linkPath}>
                <div className={`sideNav_maximizedRow ${selected && "selected"} ${outline && "outline"}`} onClick={() => {setPathURL(linkPath)}}>
                        <Icon/>
                        <span>{title}</span>
                </div>
            </Link>
        )
    }

    return (
        <div className="sideNav_maximized">            
            <div className="sideNav__section">
                <SideNavRow Icon={HomeIcon} title={"Home"} linkPath={"/"} selected={pathURL === "/"}/>
                <SideNavRow Icon={WhatshotIcon} title={"Trending"} linkPath={"/feed/trending"} selected={pathURL === "/feed/trending"}/>
                <SideNavRow Icon={SubscriptionsIcon} title={"Subscriptions"} linkPath={"/feed/subscriptions"} selected={pathURL === "/feed/subscriptions"}/>
            </div>

            <div className="sideNav__section">
                <SideNavRow Icon={VideoLibraryIcon} title={"Library"} linkPath={"/feed/library"} selected={pathURL === "/feed/library"}/>
                <SideNavRow Icon={HistoryIcon} title={"History"} linkPath={"/feed/history"} selected={pathURL === "/feed/history"}/>
            </div>

            {
                !user && (
                    <div className="sideNav__section">
                        <p className="signin__text">Sign in to like videos, comment, and subscribe.</p>
                        <div className='signin__button' onClick={handleSignIn}>
                            <AccountCircleIcon/>
                            <span>SIGN IN</span>
                        </div>
                    </div>
                )
            }

            <div className="sideNav__section">
                <span className='section__header'>BEST OF YOUTUBE</span>
                <SideNavRow Icon={MusicNoteIcon} title={"Music"} linkPath={"/channel/music"} selected={pathURL === "/channel/music"} outline={true}/>
                <SideNavRow Icon={SportsSoccerIcon} title={"Sports"} linkPath={"/channel/sports"} selected={pathURL === "/channel/sports"} outline={true}/>
                <SideNavRow Icon={SportsEsportsIcon} title={"Gaming"} linkPath={"/channel/gaming"} selected={pathURL === "/channel/gaming"} outline={true}/>
                <SideNavRow Icon={TheatersIcon} title={"Movies & Shows"} linkPath={"/channel/movies"} selected={pathURL === "/channel/movies"} outline={true}/>
                <SideNavRow Icon={ReceiptIcon} title={"News"} linkPath={"/channel/news"} selected={pathURL === "/channel/news"} outline={true}/>
                <SideNavRow Icon={LiveTvIcon} title={"Live"} linkPath={"/channel/live"} selected={pathURL === "/channel/live"} outline={true}/>
                <SideNavRow Icon={HowToRegIcon} title={"Fashion & Beauty"} linkPath={"/channel/fashion"} selected={pathURL === "/channel/fashion"} outline={true}/>
                <SideNavRow Icon={EmojiObjectsIcon} title={"Learning"} linkPath={"/channel/learning"} selected={pathURL === "/channel/learning"} outline={true}/>
                <SideNavRow Icon={ShopIcon} title={"Spotlight"} linkPath={"/channel/spotlight"} selected={pathURL === "/channel/spotlight"} outline={true}/>
                <SideNavRow Icon={PanoramaIcon} title={"360\u00B0 Video"} linkPath={"/channel/360video"} selected={pathURL === "/channel/360video"} outline={true}/>
            </div>

            <div className="sideNav__section">
                <SideNavRow Icon={AddIcon} title={"Browse channels"} linkPath={"/feed/browse"} selected={pathURL === "/feed/browse"} outline={true}/>
            </div>

            <div className="sideNav__section">
                <span className='section__header'>MORE FROM YOUTUBE</span>
                <SideNavRow Icon={YouTubeIcon} title={"Youtube Premium"} linkPath={"/premium"} selected={pathURL === "/premium"}/>
                <SideNavRow Icon={WifiIcon} title={"Live"} linkPath={"/channel/live"} selected={pathURL === "/channel/live"}/>
            </div>

            <div className="sideNav__section">
                <SideNavRow Icon={SettingsIcon} title={"Settings"} linkPath={"/account"} selected={pathURL === "/account"}/>
                <SideNavRow Icon={FlagIcon} title={"Report history"} linkPath={"/reporthistory"} selected={pathURL === "/reporthistory"}/>
                <SideNavRow Icon={HelpOutlineIcon} title={"Help"} linkPath={"/help"} selected={pathURL === "/help"}/>
                <SideNavRow Icon={ReportProblemIcon} title={"Send feedback"} linkPath={"/feedback"} selected={pathURL === "/feedback"}/>
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
