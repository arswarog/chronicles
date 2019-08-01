import { IHp } from '../../../common/hp';
import { IResources, IPosition } from '../../../common';
import { IBuild, IBuildType } from './build';

export interface ICity extends IHp {
    id: string;
    userID: string;
    name: string;
    armyID: string;
    position: IPosition;
}

export interface ICityResources extends ICity, IResources {
}

export interface ICityBuilds extends ICity {
    builds: IBuild[];
    openBuilds: IBuildType[];
}

export interface ICityFull extends ICityResources, ICityBuilds {

}
