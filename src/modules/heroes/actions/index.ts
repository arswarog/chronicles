export enum HeroesActions {
    Load = 'load heroes',
}

export function subscribeForHero(id: string) {
    return () => {
        console.log('subscribe for hero ' + id);
        return () => {
            console.log('unsubscribe from hero ' + id);
        };
    };
}

export function subscribeForMyHeroes() {
    return () => {
        console.log('subscribe for my heroes');
        return () => {
            console.log('unsubscribe from my heroes');
        };
    };
}

export const loadHeroes = () => ({
    type  : HeroesActions.Load,
    method: `heroes.json`,
});
