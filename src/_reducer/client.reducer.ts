import { AnyAction } from 'redux';
import { IClientState } from './client.interface';

export enum ClientActionType {
    LoadingComplete = 'Loading complete',
}

export function clientReducer(state: IClientState | undefined, action: AnyAction): IClientState {
    if (!state)
        state = {
            timestampDelta: 0,
            time          : 1231231123,
            loading       : 1,
        };

    switch (action.type) {
        case ClientActionType.LoadingComplete:
            return {
                ...state,
                loading: 0,
            };
    }

    return state;
}