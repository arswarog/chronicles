import { ISkill } from './_interfaces/skill';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    skill: ISkill;
}

export const SkillListItem = ({skill}: IProps) => (
    <div className="skill">
        <div className="pall">
            <Link to={`/skill/${skill.id}`}>
                <span className="el70 fll">
                    <img width="64" height="64" className="fll" alt={skill.title}
                         src={`/img/skills/${skill.skillBase}.jpg`}/>
                </span>
                <span className="bl col1">{skill.title}</span>
            </Link>
        </div>
        <span className="bl">{skill.more}</span>
        <div className="flc"/>
    </div>
);
