import * as React from 'react';
import { Route } from 'react-router';
import { List } from './pages/List';
import { View } from './pages/View';
import { useEffect } from 'react';
import { loadHeroes } from './actions';
import { connect } from 'react-redux';

export * from './pages/List';
export * from './pages/View';

export const HeroesModule = connect(
    state => state,
    {loadHeroes},
)(
    ({loadHeroes}: any) => {
        useEffect(() => {
            loadHeroes();
        }, [loadHeroes]);

        return (
            <div>
                <Route path="/heroes" exact={true} component={List}/>
                <Route path="/heroes/:id" component={View}/>
            </div>
        );
    },
);
