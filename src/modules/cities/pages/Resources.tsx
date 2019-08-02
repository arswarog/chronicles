import { ICityResources } from '../interfaces';
import { connect } from 'react-redux';
import { IGlobalState } from '../../../reducer';
import { getMyCity } from '../helpers';
import { match } from 'react-router';
import { Link } from 'react-router-dom';
import cityPng from '../../../assets/img/city/city.png';
import { HpBar } from '../../../components/HpBar';
import React, { useEffect } from 'react';
import { subscribeForCity } from '../actions';

interface IProps {
    cityID: string;
    city: ICityResources;
}

interface IParams {
    id: string;
}

export const Resources = connect(
    (state: IGlobalState, props: { match: match<IParams> }) => ({
        cityID: props.match.params.id,
        city  : getMyCity(state, props.match.params.id),
    }),
)(
    ({city, cityID}: IProps) => {
        useEffect(subscribeForCity(cityID), [cityID]);

        if (!city)
            return (
                <div className="page-loader">Loading...</div>
            );

        return (
            <div>
                <div>
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
                </div>

                <div>
                    <a className="loc bl" href="#/city/{city.id}">
                        <div id="blik" className="blik"
                             style={{
                                 display           : 'inline-block',
                                 width             : '0px',
                                 left              : '10px',
                                 backgroundPosition: '100% 50%',
                             }}>
                            {city.name}
                        </div>
                        <span className="hlpd">{city.hp}/{city.hpMax}</span>
                    </a>
                    <div className="flc">hpbar</div>
                </div>

                <div className="title"><a href="#/city/{city.id}">Ресурсы</a></div>
                <div className="pall">
                    <div className="cityview">

                        <img src="../img/res/people.gif"/> Люди: <b>{city.res.people}</b>/{city.resMax.people}
                        [{city.resDelta.people}]<br/>
                        <img src="../img/res/gold.gif"/> Золото: <b>{city.res.gold}</b>/{city.resMax.gold}
                        [{city.resDelta.gold}]<br/>
                        <img src="../img/res/food.gif"/> Еда: <b>{city.res.food}</b>/{city.resMax.food}
                        [{city.resDelta.food}]<br/>
                        <img src="../img/res/wood.gif"/> Дерево: <b>{city.res.wood}</b>/{city.resMax.wood}
                        [{city.resDelta.wood}]<br/>
                        <img src="../img/res/stone.gif"/> Камень: <b>{city.res.stone}</b>/{city.resMax.stone}
                        [{city.resDelta.stone}]<br/>
                        <img src="../img/res/iron.gif"/> Железо: <b>{city.res.iron}</b>/{city.resMax.iron}
                        [{city.resDelta.iron}]<br/>
                    </div>
                </div>

                <div className="title"><a href="#/city/{city.id}/buyres">Купить ресурсы</a></div>

                <div className="title">Здания города</div>

                <div className="menu">
                    <span>
                        <a className="menu" href="#/city/{city.id}/update">
                            <img className="i" width="32" height="32" alt=""
                                 src="../img/map.gif"/>Изменить город</a>
                        </span>
                </div>
            </div>
        );
    },
);
