import React from 'react';
import { count2human } from '../common/hp';

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
    const vals = [];
    const bars = [];

    if (target.hpMax) {
        const val     = target.hp || 0;
        const max     = target.hpMax;
        const percent = Math.floor(val / max * 100);

        const style = {width: percent + '%'};

        vals.push(<div key="hpbar__hpval" className="hpbar__hpval">{count2human(val)} / {count2human(max)}</div>);
        bars.push(<div key="hpbar__hpbar" className="hpbar__hpbar" style={style}/>);
    }

    if (target.mpMax) {
        const val     = target.mp || 0;
        const max     = target.mpMax;
        const percent = Math.floor(val / max * 100);

        const style = {width: percent + '%'};

        vals.push(<div key="hpbar__mpval" className="hpbar__mpval">{count2human(val)} / {count2human(max)}</div>);
        bars.push(<div key="hpbar__mpbar" className="hpbar__mpbar" style={style}/>);
    }

    if (target.expMax) {
        const val     = target.exp || 0;
        const max     = target.expMax;
        const percent = Math.floor(val / max * 100);

        const style = {width: percent + '%'};

        bars.push(<div key="hpbar__expbar" className="hpbar__expbar" style={style}/>);
    }

    return (
        <div className="hpbar">
            {vals}
            {bars}
        </div>
    );
};
