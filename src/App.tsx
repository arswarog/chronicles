import React from 'react';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <div id="header">
                <div className="exp">
                    {/*<div style="width:0%;"></div>*/}
                </div>

                <div className="ptxt bg1">
                    <div>
                        <span className="flr">
                            <span className="nw">
                                <img ng-show="isLoading" width="16" height="16" alt="Loading..."
                                     src="../img/isloading.tr.gif"/>
                            </span>
                            <span className="nw">
                                <img width="16" height="16" src="../img/silver.gif" alt="Д"/>
                                myuser.gold
                            </span>
                            <span className="nw" ng-click="resetState()">
                                <img width="16" height="16" alt="В"
                                     src="../img/clock.gif"/>
                                tsd, time | ts2human</span>
                        </span>
                        <span>
                            <img className="i2" id="nickname" width="16" height="16" alt="П"
                                 src="../img/premium_0.gif"/>
                            <a href="#/profile/myuser.id" className="col1">myuser.nickname</a>
                            <span className="nw"><img width="16" height="16" src="../img/level.gif" alt="У"/>1</span>
                        </span>
                    </div>
                    <div className="flc"></div>
                </div>

                <div className="sep-light"></div>
                <div className="sep-dark"></div>

                <div>
                    {/*<div id="topmenu">*/}
                    {/*    <div className="flr">*/}
                    {/*        <div className="c38"><a className="el34" href="#/chat/all"><img width="32" height="32"*/}
                    {/*                                                                        src="../img/post.gif"*/}
                    {/*                                                                        alt="Почта"></a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="c38"><a className="el34" href="#/cities"><img width="32" height="32"*/}
                    {/*                                                                 src="../img/hram.gif" alt="Гл"></a>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="c38"><a className="el34" href="#/heroes"><img width="32" height="32"*/}
                    {/*                                                                 src="../img/hero.gif" alt="Бз"></a>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="c38"><a className="el34" href="#/armies"><img width="32" height="32"*/}
                    {/*                                                                 src="../img/battle.gif"*/}
                    {/*                                                                 alt="Бо"></a>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="c38"><a className="el34" href="#/ebuy"><img width="32" height="32"*/}
                    {/*                                                               src="../img/ebuy.gif" alt="Т"></a>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="c38"><a className="el34" href="#/diplomat"><img width="32" height="32"*/}
                    {/*                                                                   src="../img/unitconveer.gif"*/}
                    {/*                                                                   alt="Т"></a></div>*/}
                    {/*    <div*/}
                    {/*        className="c38"><a className="el34" href="#/map"><img width="32" height="32"*/}
                    {/*                                                              src="../img/map.gif"*/}
                    {/*                                                              alt="Гл"></a></div>*/}
                    {/*</div>*/}
                    {/**/}
                    {/*<div className="flc"></div>*/}
                </div>
                {/*<div ng-controller="Notice" ng-show="notice">*/}
                {/*    <div className="bg3">*/}
                {/*        <div className="pall bg3gr">*/}
                {/*            <div className="msg">*/}
                {/*                <a href="{{notice.link}}">*/}
                {/*                    <span className="el70">*/}
                {/*                        <img width="64" height="64" src="../img/users/{{notice.from}}.jpg" alt=""*/}
                {/*                             style="background-color: yellow">*/}
                {/*                    </span>*/}
                {/*                </a>*/}
                {/*                <span className="txt" style="color:#ffffff;">*/}
                {/*                    <span className="col2" ng-show="notice.date>0">{{*/}
                {/*                        notice*/}
                {/*                        .date | ts2human,*/}
                {/*                    }}: </span><span*/}
                {/*                    className="col1" ng-show="notice.title">{{notice.title}}</span><br/>{{notice.text}}*/}
                {/**/}
                {/*                </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="menu">*/}
                {/*        <span className="menu"><a className="menu-l" ng-click="goYes()"><img className="i" width="32"*/}
                {/*                                                                             height="32"*/}
                {/*                                                                             src="../img/map.gif"*/}
                {/*                                                                             alt="">{{*/}
                {/*            message*/}
                {/*            .yestext,*/}
                {/*        }}</a></span><span*/}
                {/*        className="menu"><a className="menu-l" ng-click="goNo()"><img className="i" width="32"*/}
                {/*                                                                      height="32"*/}
                {/*                                                                      src="../img/map.gif" alt="">{{*/}
                {/*        message*/}
                {/*        .notext,*/}
                {/*    }}</a></span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/*<div id="content">*/}
            {/*    <div ng-hide="myuser.id">*/}
            {/*        <div>*/}
            {/*            <a className="loc bl" href="#">*/}
            {/*                <div id="blik" className="blik"*/}
            {/*                     style="display: inline-block; width: 0px; left: 10px; background-position: 100% 50%;"></div>*/}
            {/*                <span className="hlpt">Вход</span>*/}
            {/*                <span className="hlpd col1"></span>*/}
            {/*            </a>*/}
            {/*            <div className="flc"></div>*/}
            {/*        </div>*/}
            {/*        <div className="c" style="background:url(../img/login-bg.jpg); height: 200px" ng-controller="Login">*/}
            {/*            <form ng-submit="goLogin()">*/}
            {/*                <div className="с">*/}
            {/*                    <label htmlFor="LoginForm_username" className="required">Логин <span*/}
            {/*                        className="required">*</span></label><br>*/}
            {/*                    <input name="LoginForm[username]" id="LoginForm_username" type="text"*/}
            {/*                           ng-model="login"><br>*/}
            {/*                        <div className="errorMessage" id="LoginForm_username_em_"*/}
            {/*                             style="display:none"></div>*/}
            {/*                </div>*/}

            {/*                <div className="с">*/}
            {/*                    <label htmlFor="LoginForm_password" className="required">Пароль <span*/}
            {/*                        className="required">*</span></label><br>*/}
            {/*                    <input name="LoginForm[password]" id="LoginForm_password" type="password"*/}
            {/*                           ng-model="password"><br>*/}
            {/*                        <div className="errorMessage" id="LoginForm_password_em_"*/}
            {/*                             style="display:none"></div>*/}
            {/*                </div>*/}

            {/*                <div className="с rememberMe">*/}
            {/*                    <!--input name="LoginForm[rememberMe]" id="LoginForm_rememberMe" ng-model="remember" type="checkbox">*/}
            {/*                    <label for="LoginForm_rememberMe">Запомнить меня</label>*/}
            {/*                    <div class="errorMessage" id="LoginForm_rememberMe_em_" style="display:none"></div-->*/}
            {/*                </div>*/}

            {/*                <div className="с submit">*/}
            {/*                    <input type="submit" name="yt0" value="Вход"/>*/}
            {/*                </div>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div ng-view ng-show="myuser.id" style="height: 100%"></div>*/}

            {/*    <div className="sep-dang"></div>*/}

            {/*    <div className="param-bot" ng-show="myuser.id">*/}
            {/*        <span className="nw"><a href="#/logout">Выход</a></span> |*/}
            {/*        <span className="nw"><a href="#/profile">Профиль</a></span> |*/}
            {/*        <span className="nw"><a href="#/options">Настройки</a></span> |*/}
            {/*        <span className="nw"><a href="#/help">Справка</a></span> |*/}
            {/*        <span className="nw"><img width="16" height="16" src="../img/online.gif" alt="И"><?php //echo User::online() ?></span>*/}
            {/*    </div>*/}
            {/*    <div className="param-bot" ng-hide="myuser.id">*/}
            {/*        <span className="nw"><a href="#/login">Вход</a></span> |*/}
            {/*        <span className="nw"><a href="#/help">Справка</a></span> |*/}
            {/*        <span className="nw"><img width="16" height="16" src="../img/online.gif" alt="И"><?php //echo User::online() ?></span>*/}
            {/*    </div>*/}
            {/*    <div className="param-bot" ng-show="false">*/}
            {/*        <span className="nw"><a href="../pda/index.html">PDA</a></span> |*/}
            {/*        <span className="nw"><a href="../mobi/index.html">WAP</a></span>*/}
            {/*    </div>*/}

            {/*    <!--div class="sep-track"></div-->*/}

            {/*    <div id="footer">*/}

            {/*        <div id="copyright">© GreatKings 2013</div>*/}
            {/*    </div>*/}
            {/*    <!-- footer -->*/}


            {/*    <!--div id="sgroups">*/}
            {/*        <a href="http://vk.com/***"><img width="32" height="32" src="../img/sgroup/vk.png" alt="VK"></a>*/}
            {/*        <a href="http://www.odnoklassniki.ru/group/***"><img width="32" height="32" src="../img/sgroup/odn.png" alt="O"></a>*/}
            {/*    </div-->*/}

            {/*</div>*/}
            {/*<!-- page -->*/}
            {/*<pre>*/}
            {/*    {{chatlist | json}}*/}

            {/*    {{chatlogs | json}}*/}
            {/*</pre>*/}
        </div>
    );
};

export default App;
