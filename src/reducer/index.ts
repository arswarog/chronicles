import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { IClientState } from './client.interface';
import { clientReducer } from './client.reducer';
import { IProfileState } from './profile.interface';
import { profileReducer } from './profile.reducer';
import { history } from '../history';
import { heroesReducer, IHeroesState } from '../modules/heroes/reducers/heroes.reducer';
import { ICitiesState } from '../modules/cities/interfaces';
import { citiesReducer } from '../modules/cities/reducers';

export interface IGlobalState {
    router: RouterState;
    client: IClientState;
    profile: IProfileState;
    heroes: IHeroesState;
    cities: ICitiesState;
}

export const globalReducer: Reducer<IGlobalState> = combineReducers<IGlobalState>({
    router : connectRouter(history),
    client : clientReducer,
    profile: profileReducer,
    heroes : heroesReducer,
    cities : citiesReducer,
});
