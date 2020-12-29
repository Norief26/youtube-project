import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header"
import SideNavMinimized from "./Components/SideNav_Minimized"
import SideNavMaximized from "./Components/SideNav_Maximized"
import './App.css';

function App() {
    const [openSideNav, setSideNav] = useState(true)

    const handleSideNav = () => {
        setSideNav(!openSideNav)
    }

    return (
        <Router>
            <div className="App">
                <Header handleSideNav={handleSideNav}/>
                <Switch>
                    <Route path="/">
                        <div className="app__content">
                            {openSideNav ? <SideNavMaximized/> : <SideNavMinimized/>}
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;