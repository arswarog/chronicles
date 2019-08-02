import React from 'react';

interface IProps {
    title: string;
    text: string;
}

export const Message = ({title, text}: IProps) => (
    <div>
        <span className="title">{title}</span>
        {text}
    </div>
);
