import { IHp } from '../../common/hp.interface';

export interface IHero extends IHp {
    id: string;
    name: string;
    heroBase: string;
}