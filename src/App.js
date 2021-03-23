import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Display from "./components/Display";
import EpisodePage from './pages/EpisodePage'

import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null)
  const [selectedSeason, setSelectedSeason] = useState(null)

  const displayFunc = (data)=> {
    setShow(data)
  }

  const onSelectSeason = (season) => {
    if (show) {
      setSelectedSeason(show.seasons[season])
    }
  }

  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Integration Testing Challenge</a>
        </nav>
        <div className="App">
          <Switch>
            <Route path="/episode/:episodeId">
              <EpisodePage season={selectedSeason} />
            </Route>
            <Route exact path="/">
              <Display displayFunc={displayFunc} onSelectSeason={onSelectSeason}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}