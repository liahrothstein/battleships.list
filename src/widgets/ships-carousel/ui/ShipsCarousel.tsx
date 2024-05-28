import { ShipCard } from "@entities/index";

import { vehicles } from '@constants/vehicles';

import './ShipsCarousel.scss';

export function ShipsCarousel() {

    return (
        <div>
            <div className="shipsCarousel">
                {vehicles.map((ship) => (
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
