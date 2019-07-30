import { AnyAction } from 'redux';
import { IProfileState } from './profile.interface';

export function profileReducer(state: IProfileState | undefined, action: AnyAction): IProfileState {
    if (!state)
        state = {
            nickname: 'nick name',
            gold: 12,
            level: 1,
        };

    return state;
}
