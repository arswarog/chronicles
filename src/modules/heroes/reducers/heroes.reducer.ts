import { AnyAction } from 'redux';
import { IHeroFull } from '../interfaces/heroes.interface';
import { HeroesActions } from '../actions';
import { SUCCESS } from '../../../common';

export interface IHeroesState {
    heroes: IHeroFull[];
}

export function heroesReducer(state: IHeroesState | undefined, action: AnyAction): IHeroesState {
    if (!state)
        state = {
            heroes: [],
        };

    switch (action.type) {
        case HeroesActions.Load + SUCCESS:
            return {
                ...state,
                heroes: action.result,
            };
    }

    return state;
}
