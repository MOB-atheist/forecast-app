import { Route, Router, Switch } from "react-router";

import Home from "../pages/Home"

export default function Routes() {
    return(
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}