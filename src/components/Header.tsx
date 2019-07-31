import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IGlobalState } from '../reducer';
import { ts2human } from '../reducer/client.interface';
import { IProfileState } from '../reducer/profile.interface';

import premiumGif from '../assets/img/premium_0.gif';
import levelGif from '../assets/img/level.gif';
import clockGif from '../assets/img/clock.gif';
import silverGif from '../assets/img/silver.gif';
import isLoadingTrGif from '../assets/img/isloading.tr.gif';

import postGif from '../assets/img/post.gif';
import hramGif from '../assets/img/hram.gif';
import heroGif from '../assets/img/hero.gif';
import battleGif from '../assets/img/battle.gif';
import ebuyGif from '../assets/img/ebuy.gif';
import unitconveerGif from '../assets/img/unitconveer.gif';
import mapGif from '../assets/img/map.gif';

interface IProps {
    profile: IProfileState;
    time: string;
    loading: number;
    notice: any;
    message: any;
}

const links: Array<{
    title: string,
    href: string
    image: any;
}> = [
    {
        title: 'Cities',
        href : '/cities',
        image: hramGif,
    },
    {
        title: 'Heroes',
        href : '/heroes',
        image: heroGif,
    },
];

export const HeaderPart = connect(
    (state: IGlobalState) => ({
        profile: state.profile,
        time   : ts2human(state.client.time),
        loading: state.client.loading,
        notice : null,
        message: {},
    }),
)(
    ({profile, time, loading, notice, message}: IProps) => {
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

                <div className="sep-light"></div>
                <div className="sep-dark"></div>

                <div>
                    <div id="topmenu">
                        <div className="flr">
                            <div className="c38"><a className="el34" href="#/chat/all">
                                <img width="32" height="32" alt="Почта"
                                     src={postGif}/>
                            </a>
                            </div>
                        </div>
                        {links.map(link =>
                            <div key={link.href} className="c38">
                                <Link className="el34" to={link.href}>
                                    <img width="32" height="32" alt={link.title} src={link.image}/>
                                </Link>
                            </div>,
                        )}
                        <div className="c38">
                            <a className="el34" href="#/armies">
                                <img width="32" height="32" alt="Бо"
                                     src={battleGif}/>
                            </a>
                        </div>
                        <div className="c38">
                            <a className="el34" href="#/ebuy">
                                <img width="32" height="32" alt="Т"
                                     src={ebuyGif}/>
                            </a>
                        </div>
                        <div className="c38">
                            <a className="el34" href="#/diplomat">
                                <img width="32" height="32" alt="Т"
                                     src={unitconveerGif}/>
                            </a>
                        </div>
                        <div className="c38">
                            <a className="el34" href="#/map">
                                <img width="32" height="32" alt="Гл"
                                     src={mapGif}/>
                            </a>
                        </div>
                    </div>

                    <div className="flc"></div>
                </div>

                {notice && <div>
                    <div className="bg3">
                        <div className="pall bg3gr">
                            <div className="msg">
                                <a href="{notice.link}">
                                    <span className="el70">
                                        <img width="64" height="64" alt=""
                                             src="../img/users/{notice.from}.jpg"
                                             style={{backgroundColor: 'yellow'}}/>
                                    </span>
                                </a>
                                <span className="txt" style={{color: '#ffffff'}}>
					<span className="col2" ng-show="notice.date>0">{ts2human(notice.date)}: </span><span
                                    className="col1" ng-show="notice.title">{notice.title}</span><br/>
                                    {notice.text}

				</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <span className="menu">
                            <span className="menu-l" ng-click="goYes()">
                            <img className="i" width="32" height="32" alt=""
                                 src="../img/map.gif"/>{message.yestext}</span>
                        </span>
                        <span className="menu">
                            <span className="menu-l" ng-click="goNo()">
                                <img className="i" width="32" height="32" alt=""
                                     src="../img/map.gif"/>
                                {message.notext}
                                </span>
                            </span>
                    </div>
                </div>}
            </div>
        );
    });
