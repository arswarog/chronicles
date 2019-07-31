import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IGlobalState } from '../../../reducer';
import { HpBar } from '../../../components/HpBar';
import { IHeroFull } from '../interfaces/heroes.interface';
import { Link } from 'react-router-dom';
import { match } from 'react-router';
import { subscribeForHero } from '../actions';
import { SkillListItem } from '../../skills/SkillListItem';
import { getMyHero } from '../helpers';

import postGif from '../../../assets/img/post.gif'

interface IProps {
    heroID: string;
    hero: IHeroFull | undefined;
    match: any;
}

interface IParams {
    id: string;
}

export const View = connect(
    (state: IGlobalState, props: { match: match<IParams> }) => ({
        heroID: props.match.params.id,
        hero  : getMyHero(state, props.match.params.id),
        match : props.match,
    }),
)(
    ({hero, heroID, match}: IProps) => {
        useEffect(subscribeForHero(heroID), [heroID]);

        if (!hero)
            return (
                <div className="page-loader">Loading...</div>
            );

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
                            <img className="i" width="32" height="32" src={postGif} alt=""/>
                            Развитие
                        </Link>
                    </span>
                </div>

                <div className="title">Умения</div>
                {hero.skills.map(skill => <SkillListItem key={skill.id} skill={skill}/>)}
                <div className="sep-light"/>
                <div className="sep-dark"/>
            </div>
        );
    },
);
