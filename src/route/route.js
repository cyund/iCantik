import React from 'react';
import {
    BrowserRouter,
    Route, Switch
}
from "react-router-dom";
import Index from '../page/index';
import Project from '../page/project';

function Home () {
    return (
        <BrowserRouter>
        <Switch>
        <Route path='/' component={Index} exact/>
        <Route path='/project' component={Project} exact/>
        </Switch>
        </BrowserRouter>
    )
}


export default Home;