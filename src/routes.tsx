import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import App from './App';
import { HeroesModule, List, View } from './Heroes';
import { Redirect } from 'react-router-dom';

const Root = ({route}: any) => (
    <div>
        <h1>Root</h1>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
);

const Home = ({route}: any) => (
    <div>
        <h2>Home</h2>
    </div>
);

const Child = ({route}: any) => (
    <div>
        <h2>Child</h2>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes, {someProp: 'these extra props are optional'})}
    </div>
);

const GrandChild = ({someProp}: any) => (
    <div>
        <h3>Grand Child</h3>
        <div>{someProp}</div>
    </div>
);

export const routes: RouteConfig[] = [
    {
        component: Root,
        path     : '/auth',
        routes   : [
            {
                path     : '/auth/home',
                exact    : true,
                component: Home,
            },
            {
                path     : '/child/:id',
                component: Child,
                routes   : [
                    {
                        path     : '/child/:id/grand-child',
                        component: GrandChild,
                    },
                ],
            },
        ],
    },
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to={'/heroes'}/>,
    },
    {
        component: App,
        routes   : [
            {
                //path     : '/heroes',
                component: HeroesModule,
            },
        ],
    },
];
