import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../../../reducer';
import { HpBar } from '../../../components/HpBar';
import { Link } from 'react-router-dom';
import { match } from 'react-router';
import { subscribeForCity } from '../actions';
import { getMyCity } from '../helpers';
import { ICityResources } from '../interfaces';
import { Televizor } from '../../../components/Televizor';
import { MapView } from '../../../components/MapView';
import { ResourceList } from '../components/ResourceList';


interface IProps {
    cityID: string;
    city: ICityResources | undefined;
    match: any;
}

interface IParams {
    id: string;
}

export const View = connect(
    (state: IGlobalState, props: { match: match<IParams> }) => ({
        cityID: props.match.params.id,
        city  : getMyCity(state, props.match.params.id),
        match : props.match,
    }),
)(
    ({city, cityID, match}: IProps) => {
        useEffect(subscribeForCity(cityID), [cityID]);

        if (!city)
            return (
                <div className="page-loader">Loading...</div>
            );

        return (
            <div className="m-cities-p-view">
                <div className="title">{city.name}</div>
                <HpBar target={city}/>
                <div className="mcol">
                    <div className="title">
                        <span>Карта</span>
                    </div>
                    <Televizor>
                        <MapView position={city.position}
                                 place="place"
                                 h={2} w={2}
                                 movie="false"
                                 link="/map/:pos"/>
                    </Televizor>
                </div>
                <div className="mcol">
                    <Link className="title" to={`/cities/${city.id}/res`}>Ресурсы</Link>
                    <div className="pall">
                        <ResourceList target={city}/>
                    </div>

                    <div className="title">
                        <Link to={`/army/${city.armyID}`}>Армия города</Link>
                    </div>
                    <div ng-show="!cityarmy.hpmax">Армии в городе нет</div>
                    <div ng-show="cityarmy.hpmax">
                        {/*<a ng-repeat="unit in cityarmy.staff" href="#/unit/{unit.typeid}">{unit.title}: <span*/}
                        {/*    className="col1">{unit.count}</span><br/></a>*/}
                    </div>
                    <div className="title"><a href="#/unitconveer/{city.id}">Набор рекрутов</a></div>

                    {/*<div className="menu">*/}
                    {/*    <span><a className="menu" href="#/city/{city.id}/update"><img className="i" width="32" height="32" src="/img/map.gif" alt="">Изменить город</a></span>*/}
                    {/*</div>*/}

                    <div className="menu">
                        <span>
                            <a className="menu" href="#/city/{city.id}/builds">
                                <img className="i" width="32" height="32" alt=""
                                     src="../img/map.gif"/>Здания города</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    },
);
