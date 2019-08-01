import React from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../../../reducer';
import { HpBar } from '../../../components/HpBar';
import { Link } from 'react-router-dom';
import { ICity } from '../interfaces';

import cityPng from '../../../assets/img/city/city.png';

interface IProps {
    cities: ICity[];
}

export const List = connect(
    (state: IGlobalState) => ({
        cities: state.cities.cities,
    }),
)(
    ({cities}: IProps) => {
        return (
            <div>
                <Link to="/cities" className="title">Города</Link>
                {cities.map(city =>
                    <div key={city.id}>
                        <div className="pall">
                            <Link to={`/cities/${city.id}`}>
                                <span className="el70 fll">
                                    <img width="64" height="64" className="fll" alt=""
                                         src={cityPng}/>
                                </span>
                                <span className="bl">
                                    <span className="col1">{city.name}</span>
                                </span>
                            </Link>
                            <div className="bl70">
                                <HpBar target={city}/>
                            </div>
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
