import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Routes} from "../constants/routes";
import Home from "../pages/Home";
import About from "../pages/About";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
    <Switch>
        <Route exact path={Routes.HOME}>
            <Home />
        </Route>
        <Route path={Routes.ABOUT}>
            <About />
        </Route>
        <Route path={Routes.MOVIES}>
            <Movies />
        </Route>
        <Route>
            <NotFound />
        </Route>

    </Switch>
);

export default AppRouter;