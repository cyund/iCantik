import React from 'react';
import {
    BrowserRouter,
    Route, Switch
}
from "react-router-dom";
import Index from '../page/index';
import About from '../components/About';
import Project from '../page/project';

function Home () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Index} exact/>
            <Route path="/About" component={About} />
            <Route exact path='/project' component={Project} exact/>
        </Switch>
        </BrowserRouter>
    )
}


export default Home;