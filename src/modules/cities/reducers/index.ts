import { ICitiesState } from '../interfaces';
import { AnyAction } from 'redux';
import { SUCCESS } from '../../../common';
import { CitiesActions } from '../actions';

export function citiesReducer(state: ICitiesState, action: AnyAction): ICitiesState {
    if (!state)
        state = {
            city  : null,
            cities: [],
        };

    switch (action.type) {
        case CitiesActions.Load + SUCCESS:
            return {
                ...state,
                cities: action.result,
            };
    }

    return state;
}
