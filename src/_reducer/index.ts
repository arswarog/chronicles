import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { IClientState } from './client.interface';
import { clientReducer } from './client.reducer';
import { IProfileState } from './profile.interface';
import { profileReducer } from './profile.reducer';
import { history } from '../history';
import { heroesReducer, IHeroesState } from '../Heroes/_reducer/heroes.reducer';

export interface IGlobalState {
    router: RouterState;
    client: IClientState;
    profile: IProfileState;
    heroes: IHeroesState;
}

export const globalReducer: Reducer<IGlobalState> = combineReducers<IGlobalState>({
    router : connectRouter(history),
    client : clientReducer,
    profile: profileReducer,
    heroes : heroesReducer,
});
