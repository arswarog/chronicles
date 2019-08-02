import { IResources } from '../../../common';

import peopleGif from '../../../assets/img/res/people.gif';
import goldGif from '../../../assets/img/res/gold.gif';
import foodGif from '../../../assets/img/res/food.gif';
import woodGif from '../../../assets/img/res/wood.gif';
import stoneGif from '../../../assets/img/res/stone.gif';
import ironGif from '../../../assets/img/res/iron.gif';
import * as React from 'react';

const gif = {
    people: peopleGif,
    gold  : goldGif,
    food  : foodGif,
    wood  : woodGif,
    stone : stoneGif,
    iron  : ironGif,
};


const resourceName = {
    people: 'Люди',
    gold  : 'Золото',
    food  : 'Еда',
    wood  : 'Дерево',
    stone : 'Камень',
    iron  : 'Железо',
};

interface IProps {
    target: IResources;
}

export const ResourceList = ({target}: IProps) => {
    const list = Object.keys(resourceName);
    return (
        <div className="res-list">
            {list.map(res => (
                <div key={res} className='reslist__item'>
                    <img src={gif[res]} alt='people'/>
                    {/*<span className="reslist__item_title">{}*/}
                    {resourceName[res]}: <b>{target.res[res]}</b> / {target.resMax[res]}
                    &nbsp;[{target.resDelta[res]}]
                </div>
            ))}
        </div>
    );
};
