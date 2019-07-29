import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { IClientState } from './client.interface';
import { clientReducer } from './client.reducer';
import { IProfileState } from './profile.interface';
import { profile } from './profile.reducer';
import { history } from '../history';

export interface IGlobalState {
    router: RouterState;
    client: IClientState;
    profile: IProfileState;
}

export const globalReducer: Reducer<IGlobalState> = combineReducers<IGlobalState>({
    router: connectRouter(history),
    client: clientReducer,
    profile,
});
