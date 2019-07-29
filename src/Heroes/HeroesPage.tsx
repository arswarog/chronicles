import React from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../_reducer';
import { HpBar } from '../components/HpBar';
import { IHero } from './_reducer/hero.interface';

interface IProps {
    heroes: IHero[];
}

export const HeroesPage = connect(
    (state: IGlobalState) => ({}),
)(
    () => {
        return (
            <div>
                <div className="title">Герои</div>
                <div ng-repeat="hero in heroes">
                    <div className="pall">
                        <a href="#/hero/{{hero.id}}">
                            <span className="el70 fll">
                                <img width="64" height="64" className="fll" src="{{domain}}/img/hero/{{hero.herobase}}.jpg"
                                     alt=""/>
                            </span>
                            <span className="bl">
                                ["Маг","Генерал"][(hero.type)-1] <span className="col1">hero.title</span> [hero.level]
                            </span>
                        </a>
                        <div className="bl70">
                            <HpBar for="hero"></HpBar>
                        </div>
                        <div className="flc"></div>

                        <span className="bl">hero.more</span>
                        <div className="flc"></div>
                    </div>
                    <div className="sep-light"></div>
                    <div className="sep-dark"></div>
                </div>
            </div>
        );
    },
);
