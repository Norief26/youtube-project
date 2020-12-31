import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import SideNavMinimized from "./Components/SideNav_Minimized"
import SideNavMaximized from "./Components/SideNav_Maximized"
import Watch from "./Components/Watch"
import './App.css';

function App() {
    const [sideNav, setSideNav] = useState(false)
    const [modalNav, setModalNav] = useState(false)

    const toggleSideNav = () => {
        setSideNav(!sideNav)
    }

    const toggleModalNav = () => {
        setModalNav(!modalNav)
    }

    return (
        <Router>
            <div className="App">
                <Header toggleSideNav={toggleSideNav} toggleModalNav={toggleModalNav}/>
                <div className="app__content">

                    {
                    //************************************************************************************
                    //              ROUTES WITHOUT SIDEBAR
                    //************************************************************************************/
                    }

                    <Switch>
                        <Route path="/watch">
                            <Watch modalNav={modalNav} toggleModalNav={toggleModalNav}/>
                        </Route>
                        <Route path="/" component={sideNav ? SideNavMinimized : SideNavMaximized}/>
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