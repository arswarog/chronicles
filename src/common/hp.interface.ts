export interface IHp {
    hp: number;
    hpMax: number;
}

export interface IMp {
    mp: number;
    mpMax: number;
}

export interface IExp {
    exp: number;
    expMax: number;
}

export interface IHpMp extends IHp, IMp {
}

export interface IHpMpExp extends IHp, IMp, IExp {
}


export function count2human(count: number | undefined, showNull: boolean = false) {
    if (!count)
        return showNull ? '0' : '';

    if (count < 1000) return count;
    return Math.ceil(count / 1000) + 'k';
}
