import { ShipCard } from "@entities/index";
import { Filter } from "@features/index";

import { vehicles } from '@constants/vehicles';

import './ShipsCarousel.scss';

export function ShipsCarousel() {

    return (
        <>
            <Filter />
            <div className="shipsCarousel">
                {vehicles.map((ship) => (
                    <ShipCard
                        key={ship.title}
                        nation={ship.nation.icons.large}
                        type={ship.type.icons.default}
                        level={ship.level}
                        title={ship.title}
                        icon={ship.icons.large} />
                ))}
            </div>
        </>
    )
}
