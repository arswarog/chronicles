import React from 'react';
import { IPosition } from '../common';

interface IProps {
    position: IPosition;
    place: string;
    h: number;
    w: number;
    movie: any;
    link: string;
}

export const MapView = ({position}: IProps) => (
    <div>This is MapView at {position.x}-{position.y}</div>
);
