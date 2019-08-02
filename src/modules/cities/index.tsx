import * as React from 'react';
import { Route } from 'react-router';
import { List } from './pages/List';
import { View } from './pages/View';
import { useEffect } from 'react';
import { loadCities } from './actions';
import { connect } from 'react-redux';
import { Resources } from './pages/Resources';

export * from './pages/List';
export * from './pages/View';

export const CitiesModule = connect(
    state => state,
    {loadCities},
)(
    ({loadCities}: any) => {
        useEffect(() => {
            loadCities();
        }, [loadCities]);

        return (
            <div>
                <Route path="/cities" exact={true} component={List}/>
                <Route path="/cities/:id" exact={true} component={View}/>
                <Route path="/cities/:id/res" exact={true} component={Resources}/>
            </div>
        );
    },
);
