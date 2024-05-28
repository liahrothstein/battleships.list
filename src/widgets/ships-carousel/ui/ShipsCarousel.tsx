import { ShipCard } from "@entities/index";

import { useVehiclesQuery } from "../../../app/services/generated";

import './ShipsCarousel.scss';

export function ShipsCarousel() {
    const { data } = useVehiclesQuery(null);

    return (
        <div>
            <div className="shipsCarousel">
                {((data !== undefined) ? (data.vehicles) : ([])).map((ship) => (
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
