import { Card } from "antd";

import { numbersConverter } from "@utils/index";

import type { ShipCardProps } from "../../../shared/types";

import './ShipCard.scss';

export function ShipCard({ nation, type, level, title, icon }: ShipCardProps) {

    return (
        <Card
            hoverable
            cover={<img src={nation} />}>
            <div className="typeAndLevel">
                <img className="type" src={type} />
                <p className="level">{numbersConverter(level)}</p>
            </div>
            <img src={icon} className="vehicle" />
            <p className="title">{title}</p>
        </Card>
    )
}
