export enum CitiesActions {
    Load = 'load cities',
}

export function subscribeForCity(id: string) {
    return () => {
        console.log('subscribe for city ' + id);
        return () => {
            console.log('unsubscribe from city ' + id);
        };
    };
}

export function subscribeForMyCities() {
    return () => {
        console.log('subscribe for my cities');
        return () => {
            console.log('unsubscribe from my cities');
        };
    };
}

export const loadCities = () => ({
    type  : CitiesActions.Load,
    method: `cities.json`,
});
