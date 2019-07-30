import React from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../_reducer';
import { HpBar } from '../components/HpBar';
import { IHero } from './_reducer/heroes.interface';
import { Link } from 'react-router-dom';

interface IProps {
    hero: IHero;
    skill: any;
}

export const View = connect(
    (state: IGlobalState) => ({
        hero : state.heroes.heroes[0],
        skill: {},
    }),
)(
    ({hero, skill}: IProps) => {
        return (
            <div>
                <div className="title">
                    <Link to="/heroes">{hero.name} [{hero.level}]</Link>
                </div>
                <div className="pall">
                    <span className="el178 fll">
                        <img width="178" height="256" className="fll" alt=""
                             src={`/img/hero/${hero.heroBase}full.jpg`}/>
                    </span>
                    <div>["Маг","Генерал"][(hero.type)-1] армии <Link to={'/'} className="col1">Title</Link></div>
                    <span className="bl">{hero.more}</span>
                    <div className="bl178">
                        <HpBar target={hero}/>
                    </div>
                    <div className="title">Пасивный бонус</div>
                    <div className="title">Возможности:</div>
                    <span className="bl">{hero.more}</span>
                    <div className="flc"/>
                </div>

                <div className="menu">
                    <span>
                        <Link className="menu" to={`/hero/${hero.id}/progress`}>
                            <img className="i" width="32" height="32" src="../img/post.gif" alt=""/>
                            Развитие
                        </Link>
                    </span>
                </div>

                <div className="title">Умения</div>
                <div ng-repeat="skill in hero.skills">
                    <div className="pall">
                        <a href="#/skill/{{skill.id}}">
                            <span className="el70 fll">
                                <img width="64" height="64" className="fll" alt=""
                                     src={`/img/skills/{skill.skillbase}.jpg`}/>
                            </span>
                            <span className="bl col1">{skill.title}</span>
                        </a>
                    </div>
                    <span className="bl">{skill.more}</span>
                    <div className="flc"/>
                </div>
                <div className="sep-light"/>
                <div className="sep-dark"/>
            </div>
        );
    },
);
