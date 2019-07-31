import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { IGlobalState } from './reducer';
import { IProfileState } from './reducer/profile.interface';
import { HeaderPart } from './components/Header';

import onlineGif from './assets/img/online.gif';
import { HeroesModule } from './modules/heroes';

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
    ({online}: IProps) => {
        return (
            <div className="wrapper">
                <HeaderPart/>

                <div id="content">
                    <div style={{height: '100%'}}>
                        <Route path="/heroes" component={HeroesModule}/>
                        <Redirect path="*" to="/heroes"/>
                    </div>

                    <div className="sep-dang"/>

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

                    <div className="sep-track"/>

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
