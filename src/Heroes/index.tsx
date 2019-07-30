import * as React from 'react';
import { Route } from 'react-router';
import { List } from './List';
import { View } from './View';

export * from './List';
export * from './View';

export const HeroesModule = () => (
    <div>
        <Route path="/heroes" exact={true} component={List}/>
        <Route path="/heroes/123" component={View}/>
    </div>
);
