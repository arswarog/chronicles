import React from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../_reducer';
import { HpBar } from '../components/HpBar';
import { IHero } from './_reducer/heroes.interface';
import { Link } from 'react-router-dom';

interface IProps {
    heroes: IHero[];
}

export const List = connect(
    (state: IGlobalState) => ({
        heroes: state.heroes.heroes,
    }),
)(
    ({heroes}: IProps) => {
        return (
            <div>
                <Link to="/heroes" className="title">Герои</Link>
                {heroes.map(hero =>
                    <div key={hero.id}>
                        <div className="pall">
                            <Link to={`/heroes/${hero.id}`}>
                                <span className="el70 fll">
                                    <img width="64" height="64" className="fll" alt=""
                                         src={`/img/hero/${hero.heroBase}.jpg`}/>
                                </span>
                                <span className="bl">
                                    <span className="col1">{hero.name}</span> [{hero.level}]
                                </span>
                            </Link>
                            <div className="bl70">
                                <HpBar target={hero}/>
                            </div>
                            <div className="flc"/>

                            <span className="bl">{hero.more}</span>
                            <div className="flc"/>
                        </div>
                        <div className="sep-light"/>
                        <div className="sep-dark"/>
                    </div>,
                )}
            </div>
        );
    },
);
