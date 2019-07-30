import { IHpMpExp } from '../../common/hp.interface';

export interface IHero extends IHpMpExp {
    id: string;
    name: string;
    level: number;
    heroBase: string;
    more: string;
}
