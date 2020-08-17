import React, {useCallback} from 'react';
import '../../App.css';
import routes, { RoutesType } from "./routes";
import { Route, Switch } from 'react-router-dom';
import { flattenArrayOfObjects } from "./helpers";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export const App = () => {
    const memoRoutes: RoutesType[] = useCallback(flattenArrayOfObjects(routes, 'children').filter((route: any) =>
        Reflect.has(route, 'component')), []);
    return (
        <div>
            <Switch>
                { memoRoutes.map(route => (
                    <Route key={ route.path } exact path={ route.path } component={ route.component }/>
                )) }
                <Route component={ PageNotFound }/>
            </Switch>
        </div>
    );
}
