import React from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../_reducer';
import { HpBar } from '../components/HpBar';
import { IHero } from './_reducer/heroes.interface';
import { Link } from 'react-router-dom';

interface IProps {
    heroes: IHero[];
}

export const HeroesPage = connect(
    (state: IGlobalState) => ({
        heroes: state.heroes.heroes,
    }),
)(
    ({heroes}: IProps) => {
        return (
            <div>
                <div className="title">Герои</div>
                {heroes.map(hero =>
                    <div>
                        <div className="pall">
                            <Link to={`/hero/${hero.id}`}>
                            <span className="el70 fll">
                                <img width="64" height="64" className="fll" alt=""
                                     src={`/img/hero/${hero.heroBase}.jpg`}/>
                            </span>
                                <span className="bl">
                                <span className="col1">{hero.name}</span> [{hero.level}]
                            </span>
                            </Link>
                            <div className="bl70">
                                <HpBar target={hero}></HpBar>
                            </div>
                            <div className="flc"></div>

                            <span className="bl">{hero.more}</span>
                            <div className="flc"></div>
                        </div>
                        <div className="sep-light"></div>
                        <div className="sep-dark"></div>
                    </div>,
                )}
            </div>
        );
    },
);
