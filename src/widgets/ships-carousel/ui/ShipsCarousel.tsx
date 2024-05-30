import { useEffect } from "react";

import { ShipCard } from "@entities/index";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useVehiclesQuery } from "../../../app/services/generated";
import { setVehicles } from "../../../shared/lib/slices";

import './ShipsCarousel.scss';

export function ShipsCarousel() {
    const { data } = useVehiclesQuery(null);
    const dispatch = useAppDispatch();
    const vehicles = useAppSelector((state) => (state.vehicles));
    const filteredVehicles = useAppSelector((state) => (state.filteredVehicles));

    useEffect(() => {
        if (data !== undefined) {
            dispatch(setVehicles(data.vehicles))
        }
    }, [data]);

    return (
        <div>
            <div className="shipsCarousel">
                {((filteredVehicles.length !== 0) ? (filteredVehicles) : (vehicles)).map((ship) => (
                    <ShipCard
                        key={ship.title}
                        description={ship.description}
                        nation={ship.nation.icons.large}
                        type={ship.type.icons.default}
                        level={ship.level}
                        title={ship.title}
                        icon={ship.icons.large} />
                ))}
            </div>
        </div>
    )
}
