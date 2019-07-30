import { AnyAction } from 'redux';
import { IHero } from './heroes.interface';

export interface IHeroesState {
    heroes: IHero[];
}

export function heroesReducer(state: IHeroesState | undefined, action: AnyAction): IHeroesState {
    if (!state)
        state = {
            heroes: [
                {
                    id      : '123',
                    name    : 'notAhuman',
                    heroBase: '2',
                    hp      : 24,
                    hpMax   : 100,
                    mp      : 100,
                    mpMax   : 102,
                    exp     : 12,
                    expMax  : 120,
                    level   : 2,
                    more    : 'More information about hero',
                },
                {
                    id      : '1233',
                    name    : 'human',
                    heroBase: '7',
                    hp      : 95,
                    hpMax   : 100,
                    mp      : 10,
                    mpMax   : 102,
                    exp     : 120,
                    expMax  : 120,
                    level   : 1,
                    more    : 'More information about hero',
                },
            ],
        };

    return state;
}
