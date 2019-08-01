export interface IResources {
    res: IResource;
    resMax: IResource;
    resDelta: IResource;
}

export interface IResource {
    gold: number;
    people: number;
    food: number;
    wood: number;
    stone: number;
    iron: number;
}
