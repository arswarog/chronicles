import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { IGlobalState } from './_reducer';
import { IProfileState } from './_reducer/profile.interface';
import { HeaderPart } from './Header';

import onlineGif from './assets/img/online.gif';

interface IProps {
    profile: IProfileState;
    online: number;
}

const App = connect(
    (state: IGlobalState) => ({
        profile: state.profile,
        online : 100500,
    }),
)(
    ({online, route}: any) => {
        return (
            <div className="wrapper">
                <HeaderPart></HeaderPart>

                <div id="content">

                    {renderRoutes(route.routes)}

                    <div ng-view ng-show="myuser.id" style={{height: '100%'}}></div>

                    <div className="sep-dang"></div>

                    <div className="param-bot" ng-show="myuser.id">
                        <span className="nw"><a href="#/logout">Выход</a></span> |
                        <span className="nw"><a href="#/profile">Профиль</a></span> |
                        <span className="nw"><a href="#/options">Настройки</a></span> |
                        <span className="nw"><a href="#/help">Справка</a></span> |
                        <span className="nw"><img width="16" height="16" src={onlineGif} alt="И"/>{online}</span>
                    </div>
                    <div className="param-bot" ng-hide="myuser.id">
                        <span className="nw"><a href="#/login">Вход</a></span> |
                        <span className="nw"><a href="#/help">Справка</a></span> |
                        <span className="nw"><img width="16" height="16" src={onlineGif} alt="И"/>{online}</span>
                    </div>

                    <div className="sep-track"></div>

                    <div id="footer">
                        <div id="copyright">© GreatKings 2013-2019</div>
                    </div>

                    <div id="sgroups">
                        {/*        <a href="http://vk.com/***"><img width="32" height="32" src="../img/sgroup/vk.png" alt="VK"></a>*/}
                        {/*        <a href="http://www.odnoklassniki.ru/group/***"><img width="32" height="32" src="../img/sgroup/odn.png" alt="O"></a>*/}
                    </div>
                </div>
            </div>
        );
    },
);

export default App;
