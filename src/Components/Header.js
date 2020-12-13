import React, { useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import "./../StyleSheets/Header.css"

function Header() {
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Button Clicked")
    }

    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon/>
                {/* <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt=""></img> */}
            </div>

            <div className="header__middle">
                <form className="search" onSubmit={handleSearch}>
                    <input className="search__field" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <button className="search__button" type="submit">
                        <SearchIcon type="submit"/>
                    </button>
                </form>
            </div>

            <div className="header__right">
                <AppsIcon/>
                <VideoCallIcon/>
                <MoreVertIcon/>
            </div>

        </div>
    )
}

export default Header
