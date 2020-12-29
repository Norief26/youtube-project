import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import SideNavRow from "./SideNav_Row"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import "./../StyleSheets/SideNav_Minimized.css"

function SideNav_Minimized() {
    const [pathURL, setPathURL] = useState(window.location.pathname)
    const location = useLocation()

    useEffect(() => {
        setPathURL(location.pathname)
    }, [location])

    return (
        <div className='sideNav_minimized'>
            <SideNavRow Icon={HomeIcon} title={"Home"} linkPath={"/"} selected={pathURL === "/"}/>
            <SideNavRow Icon={WhatshotIcon} title={"Trending"} linkPath={"/feed/trending"} selected={pathURL === "/feed/trending"}/>
            <SideNavRow Icon={SubscriptionsIcon} title={"Subscriptions"} linkPath={"/feed/subscriptions"} selected={pathURL === "/feed/subscriptions"}/>
            <SideNavRow Icon={VideoLibraryIcon} title={"Library"} linkPath={"/feed/library"} selected={pathURL === "/feed/library"}/>
            <SideNavRow Icon={HistoryIcon} title={"History"} linkPath={"/feed/history"} selected={pathURL === "/feed/history"}/>
        </div>
    )
}

export default SideNav_Minimized