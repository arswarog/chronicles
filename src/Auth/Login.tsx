import React from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../_reducer';

interface IProps {
}

export const HeaderPart = connect(
    (state: IGlobalState) => ({}),
)(
    () => {
        return (
            <div ng-hide="myuser.id">
                <div>
                    <a className="loc bl" href="#">
                        <div id="blik" className="blik"
                             style={{
                                 display           : 'inline-block',
                                 width             : '0px',
                                 left              : '10px',
                                 backgroundPosition: '100% 50%',
                             }}></div>
                        <span className="hlpt">Вход</span>
                        <span className="hlpd col1"></span>
                    </a>
                    <div className="flc"></div>
                </div>
                <div className="c" style={{background: 'url(../img/login-bg.jpg)', height: '200px'}}
                     ng-controller="Login">
                    <form ng-submit="goLogin()">
                        <div className="с">
                            <label htmlFor="LoginForm_username" className="required">Логин <span
                                className="required">*</span></label><br/>
                            <input name="LoginForm[username]" id="LoginForm_username" type="text"
                                   ng-model="login"/><br/>
                            <div className="errorMessage" id="LoginForm_username_em_"
                                 style={{display: 'none'}}></div>
                        </div>

                        <div className="с">
                            <label htmlFor="LoginForm_password" className="required">Пароль <span
                                className="required">*</span></label><br/>
                            <input name="LoginForm[password]" id="LoginForm_password" type="password"
                                   ng-model="password"/><br/>
                            <div className="errorMessage" id="LoginForm_password_em_"
                                 style={{display: 'none'}}></div>
                        </div>

                        <div className="с rememberMe">
                            {/*<input name="LoginForm[rememberMe]" id="LoginForm_rememberMe" ng-model="remember" type="checkbox">*/}
                            {/*<label for="LoginForm_rememberMe">Запомнить меня</label>*/}
                            {/*<div class="errorMessage" id="LoginForm_rememberMe_em_" style="display:none"></div>*/}
                        </div>

                        <div className="с submit">
                            <input type="submit" name="yt0" value="Вход"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    },
);
