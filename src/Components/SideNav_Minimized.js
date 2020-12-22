import React from 'react'
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import "./../StyleSheets/SideNav_Minimized.css"

function SideNav_Minimized({navPath, handleSideNavPath}) {
    return (
        <div className='sideNav_minimized'>
            <div className={navPath === 'HOME' ? 'sideNav__active' : 'sideNav__inactive'} onClick={() => {handleSideNavPath('HOME')}}>
                <HomeIcon/>
                <span>Home</span>
            </div>
            <div className={navPath === 'TRENDING' ? 'sideNav__active' : 'sideNav__inactive'} onClick={() => {handleSideNavPath('TRENDING')}}>
                <WhatshotIcon/>
                <span>Trending</span>
            </div>
            <div className={navPath === 'SUBSCRIPTIONS' ? 'sideNav__active' : 'sideNav__inactive'} onClick={() => {handleSideNavPath("SUBSCRIPTIONS")}}>
                <SubscriptionsIcon/>
                <span>Subscriptions</span>
            </div>
            <div className={navPath === 'LIBRARY' ? 'sideNav__active' : 'sideNav__inactive'} onClick={() => {handleSideNavPath("LIBRARY")}}>
                <VideoLibraryIcon/>
                <span>Library</span>
            </div>
            <div className={navPath === 'HISTORY' ? 'sideNav__active' : 'sideNav__inactive'} onClick={() => {handleSideNavPath("HISTORY")}}>
                <HistoryIcon/>
                <span>History</span>
            </div>
        </div>
    )
}

export default SideNav_Minimized
