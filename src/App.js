import React from 'react';
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { selectSideNav } from './Redux/preferencesSlice'
import Header from "./Components/Header"
import Home from "./Components/Home"
import SideNavMinimized from "./Components/SideNav_Minimized"
import SideNavMaximized from "./Components/SideNav_Maximized"
import SideNavModal from './Components/SideNav_Modal'
import Watch from "./Components/Watch"
import './App.css';

function App() {
    const sideNav = useSelector(selectSideNav)
    const sideNavMinMediaQuery = useMediaQuery({ query: '(max-width: 792px)' })
    const sideNavMaxMediaQuery = useMediaQuery({ query: '(max-width: 1313px)' })

    return (
        <Router>
            <div className="App">
                <Header/>
                <SideNavModal/>
                <div className="app__content">

                    {
                    //************************************************************************************
                    //              ROUTES WITHOUT SIDEBAR
                    //************************************************************************************/
                    }

                    <Switch>
                        <Route path="/watch">
                            <Watch/>
                        </Route>
                        <Route path="/" component={(!sideNav && !sideNavMaxMediaQuery) ? SideNavMaximized : (!sideNavMinMediaQuery ? SideNavMinimized : "")}/>
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