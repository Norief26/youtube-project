import React, { useState } from 'react'
import Header from "./Components/Header"
import SideNavMinimized from "./Components/SideNav_Minimized"
import './App.css';

function App() {
    const [sideNavPath, setSideNavPath] = useState('HOME')

    const handleSideNavPath = (navPath) => {
        setSideNavPath(navPath)
    }

    return (
        <div className="App">
            <Header/>
            <div className="app__content">
                <SideNavMinimized navPath={sideNavPath} handleSideNavPath={handleSideNavPath}/>
                <p style={{padding: '20px'}}>{sideNavPath}</p>
            </div>
        </div>
    );
}

export default App;