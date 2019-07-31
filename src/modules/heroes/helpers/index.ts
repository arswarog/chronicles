import { IGlobalState } from '../../../reducer';
import { IHeroFull } from '../interfaces/heroes.interface';

export function getMyHero(state: IGlobalState, heroID: string): IHeroFull | undefined {
    return state.heroes.heroes.find(item => item.id === heroID);
}
