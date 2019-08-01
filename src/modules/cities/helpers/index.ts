import { IGlobalState } from '../../../reducer';
import { ICity } from '../interfaces/city';

export function getMyCity(state: IGlobalState, cityID: string): ICity | undefined {
    return state.cities.cities.find(item => item.id === cityID);
}
