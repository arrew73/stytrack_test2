import './App.module.css';
import React from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import MainPageContainer from "./components/ImagePage/MainPageContainer";
import HistoryContainer from "./components/HistoryPage/HistoryContainer";
import styles from "./App.module.css";

export const Navigation = () => {
    return <header className={styles.header}>
       <button><NavLink to="/main">Images</NavLink></button>
       <button><NavLink to="/story">History</NavLink></button>
    </header>
}

function App() {
    return (
        <>
            <Navigation/>
            <div>
                <Switch>
                    <Redirect exact from='/' to='/main'/>
                    <Route path='/main' render={() => <MainPageContainer/>}/>
                    <Route path='/story' render={() => <HistoryContainer/>}/>
                </Switch>
            </div>
        </>
    )
}

export default App;