import { IHpMpExp } from '../../../common/hp.interface';
import { ISkill } from '../../skills/_interfaces/skill';

export interface IHero extends IHpMpExp {
    id: string;
    name: string;
    level: number;
    heroBase: string;
    more: string;
}

export interface IHeroFull extends IHero {
    skills: ISkill[];
}
