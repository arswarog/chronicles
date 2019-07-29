import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IGlobalState } from './_reducer';
import { ts2human } from './_reducer/client.interface';
import { IProfileState } from './_reducer/profile.interface';

import premiumGif from './assets/img/premium_0.gif';
import levelGif from './assets/img/level.gif';
import clockGif from './assets/img/clock.gif';
import silverGif from './assets/img/silver.gif';
import isLoadingTrGif from './assets/img/isloading.tr.gif';

interface IProps {
    profile: IProfileState;
    time: string;
    loading: number;
}

export const HeaderPart = connect(
    (state: IGlobalState) => ({
        profile: state.profile,
        time   : ts2human(state.client.time),
        loading: state.client.loading,
    }),
)(
    ({profile, time, loading}: IProps) => {
        return (
            <div id="header">
                <div className="exp">
                    <div style={{width: '0%'}}></div>
                </div>

                <div className="ptxt bg1">
                    <div>
                        <span className="flr">
                            <span className="nw">
                                {loading
                                    ? <img width="16" height="16" alt="Loading..." src={isLoadingTrGif}/>
                                    : null}
                            </span>
                            <span className="nw">
                                <img width="16" height="16" src={silverGif} alt="Д"/>
                                {profile.gold}
                            </span>
                            <span className="nw" ng-click="resetState()">
                                <img width="16" height="16" alt="В" src={clockGif}/> {time}
                            </span>
                        </span>
                        <span>
                            <img className="i2" id="nickname" width="16" height="16" alt="П" src={premiumGif}/>
                            <Link to={`/profile`}>{profile.nickname}</Link>
                            <span className="nw">
                                <img width="16" height="16" src={levelGif} alt="У"/>{profile.level}
                            </span>
                        </span>
                    </div>
                    <div className="flc"></div>
                </div>
            </div>
        );
    });