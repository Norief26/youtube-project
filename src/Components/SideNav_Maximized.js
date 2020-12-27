import React from 'react'
import { ButtonBase } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MenuIcon from '@material-ui/icons/Menu';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PanoramaIcon from '@material-ui/icons/Panorama';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShopIcon from '@material-ui/icons/Shop';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import TheatersIcon from '@material-ui/icons/Theaters';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import "./../StyleSheets/SideNav_Maximized.css"

function SideNav_Maximized({navPath, handleSideNavPath}) {
    return (
        <div className="sideNav_maximized">
            <div className="sideNav__header">
                <ButtonBase centerRipple={true}>
                    <MenuIcon/>
                </ButtonBase>
                <img className="logo" src="https://i.ibb.co/QHNKTmP/Untitled.png" alt=""></img>
            </div>

            <div className="sideNav__section">
                <div className={navPath === "HOME" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('HOME')}}>
                    <HomeIcon/>
                    <span>Home</span>
                </div>
                <div className={navPath === "TRENDING" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('TRENDING')}}>
                    <WhatshotIcon/>
                    <span>Trending</span>
                </div>
                <div className={navPath === "SUBSCRIPTIONS" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('SUBSCRIPTIONS')}}>
                    <SubscriptionsIcon/>
                    <span>Subscriptions</span>
                </div>
            </div>

            <div className="sideNav__section">
                <div className={navPath === "LIBRARY" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('LIBRARY')}}>
                    <VideoLibraryIcon/>
                    <span>Library</span>
                </div>
                <div className={navPath === "HISTORY" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('HISTORY')}}>
                    <HistoryIcon/>
                    <span>History</span>
                </div>
            </div>

            <div className="sideNav__section">
                <p className="signin__text">Sign in to like videos, comment, and subscribe.</p>
                <div className='signin__button'>
                    <AccountCircleIcon/>
                    <span>SIGN IN</span>
                </div>
            </div>

            <div className="sideNav__section">
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <div className="channel__icon">
                        <MusicNoteIcon/>
                    </div>
                    <span>Music</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <SportsSoccerIcon/>
                    <span>Sports</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <SportsEsportsIcon/>
                    <span>Gaming</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <TheatersIcon/>
                    <span>Movies & Shows</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <ReceiptIcon/>
                    <span>News</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <LiveTvIcon/>
                    <span>Live</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <HowToRegIcon/>
                    <span>Fashion & Beauty</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <EmojiObjectsIcon/>
                    <span>Learning</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <ShopIcon/>
                    <span>Spotlight</span>
                </div>
                <div className={navPath === "PLACEHOLDER" ? "section__itemActive" : "section__itemInactive"} onClick={() => {handleSideNavPath('PLACEHOLDER')}}>
                    <PanoramaIcon/>
                    <span>360 Video</span>
                </div>
            </div>
        </div>
    )
}

export default SideNav_Maximized
