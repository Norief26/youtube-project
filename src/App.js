import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import SideNavMinimized from "./Components/SideNav_Minimized"
import SideNavMaximized from "./Components/SideNav_Maximized"
import './App.css';

function App() {
    const [sideNav, setSideNav] = useState(true)

    const toggleSideNav = () => {
        setSideNav(!sideNav)
    }

    return (
        <Router>
            <div className="App">
                <Header toggleSideNav={toggleSideNav}/>
                <div className="app__content">

                    {
                    //************************************************************************************
                    //              ROUTES WITHOUT SIDEBAR
                    //************************************************************************************/
                    }

                    <Switch>
                        <Route path="/watch">
                            <p style={{color: '#ffffff'}}>Watch</p>
                        </Route>
                        <Route path="/" component={sideNav ? SideNavMaximized : SideNavMinimized}/>
                    </Switch>

                    {
                    //************************************************************************************
                    //              ROUTES WITH SIDEBAR
                    //************************************************************************************/
                    }

                    <Switch>
                        <Route path="/feed/trending">
                            <p style={{color: '#ffffff'}}>Trending</p>
                        </Route>

                        <Route path="/feed/subscriptions">
                            <p style={{color: '#ffffff'}}>Subscriptions</p>
                        </Route>

                        <Route path="/feed/library">
                            <p style={{color: '#ffffff'}}>Library</p>
                        </Route>

                        <Route path="/feed/history">
                            <p style={{color: '#ffffff'}}>History</p>
                        </Route>

                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>

                </div>
            </div>
        </Router>
    );
}

export default App;