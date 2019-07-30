import React from 'react';
import { IHp, IHpMpExp, IHpMp, IMp, count2human } from '../common/hp.interface';

interface IProps {
    target: {
        hp?: number;
        hpMax?: number;
        mp?: number;
        mpMax?: number;
        exp?: number;
        expMax?: number;
    };
}

export const HpBar = ({target}: IProps) => {
    const hpBar = 'hp' in target && 'hpMax' in target;
    const mpBar = 'mp' in target && 'mpMax' in target;
    const expBar = 'exp' in target && 'expMax' in target;

    return (
        <div className="bar">
            {hpBar
                ? <div className="hpval">{count2human(target.hp)} / {count2human(target.hpMax)}</div>
                : null
            }
            <div ng-show="mpmax" className="mpval">{count2human(target.mp)} / {count2human(target.mpmax)}</div>
            <div className="hpbar" style={{width: `${target.hp / target.hpmax * 100}%`}}></div>
            <div ng-show="mpmax" className="mpbar" style="width:{{mp/mpmax*100}}%"></div>
            <div ng-show="exp" className="expbar" style="width:{{exp}}%"></div>
        </div>
    );
};
