import { useState } from "react";
import { Button } from "antd";
import { FilterOutlined } from '@ant-design/icons';

import { FilterButton } from "@components/FilterButton";

import { filterLevel, filterNation, filterType } from "@constants/filter-buttons";
import { FilterTags } from "../../../shared/types";

import './Filter.scss';

export function Filter() {
    const [isModalOpen, toggleModal] = useState<boolean>(false);
    const [filterTags, setFilterTags] = useState<FilterTags[]>([]);

    return (
        <div className="filter">
            {isModalOpen && <div className="filterModal">
                <h3>Фильтр по параметрам</h3>
                <p>{`Отображаемая техника `}</p>
                <hr />
                <div className="filterSections">
                    <div className="type">
                        <h6>Тип</h6>
                        <div className="buttons">
                            {filterType.map((filter) => (
                                <FilterButton
                                    key={filter.icon}
                                    icon={filter.icon} />
                            ))}
                        </div>
                    </div>
                    <div className="nation">
                        <h6>Нация</h6>
                        <div className="buttons">
                            {filterNation.map((filter) => (
                                <FilterButton
                                    key={filter.icon}
                                    icon={filter.icon} />
                            ))}
                        </div>
                    </div>
                    <div className="level">
                        <h6>Уровень</h6>
                        <div className="buttons">
                            {filterLevel.map((filter) => (
                                <FilterButton
                                    key={filter.title}
                                    title={filter.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>}
            <Button
                className="filterBtn"
                icon={<FilterOutlined />}
                onClick={() => (toggleModal(!isModalOpen))} />
        </div>
    )
}
