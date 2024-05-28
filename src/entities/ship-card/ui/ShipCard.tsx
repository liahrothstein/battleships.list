import { Card } from "antd";

import { numbersConverter } from "@utils/index";

import { useAppDispatch } from "@store/index";
import { selectVehicle } from "../../../shared/lib/slices";
import type { ShipCardProps } from "../../../shared/types";

import './ShipCard.scss';

export function ShipCard({ nation, type, level, title, icon, description }: ShipCardProps) {
    const dispatch = useAppDispatch();

    return (
        <Card
            hoverable
            cover={<img src={nation} />}
            onClick={() => (dispatch(selectVehicle({ title: title, level: numbersConverter(level), type: type, icon: icon, description: description, nation })))}>
            <div className="typeAndLevel">
                <img className="type" src={type} />
                <p className="level">{numbersConverter(level)}</p>
            </div>
            <img src={icon} className="vehicle" />
            <p className="title">{title}</p>
        </Card>
    )
}
