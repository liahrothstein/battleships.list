import { useEffect, useState } from "react";
import { Button } from "antd";
import { FilterOutlined } from '@ant-design/icons';

import { FilterButton } from "@components/FilterButton";

import { filterLevel, filterNation, filterType } from "@constants/filter-buttons";
import { onClickSetTags, filterVehicles } from "../model/filter-model";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { FilterTags } from "../../../shared/types";
import { setFilteredVehicles } from "../../../shared/lib/slices";

import './Filter.scss';

export function Filter() {
    const [isModalOpen, toggleModal] = useState<boolean>(false);
    const [filterTags, setFilterTags] = useState<FilterTags[]>(new Array());
    const vehicles = useAppSelector((state) => (state.vehicles));
    const dispatch = useAppDispatch();

    useEffect(() => {
        
        dispatch(setFilteredVehicles(filterVehicles(filterTags, vehicles)))
    }, [filterTags]);

    return (
        <div className="filter">
            {isModalOpen && <div className="filterModal">
                <h3>Фильтр по параметрам</h3>
                <p>{`Отображаемая техника: ${filterVehicles(filterTags, vehicles).length} / ${vehicles.length}`}</p>
                <hr />
                <div className="filterSections">
                    <div className="type">
                        <h6>Тип</h6>
                        <div className="buttons">
                            {filterType.map((filter) => (
                                <FilterButton
                                    key={filter.icon}
                                    icon={filter.icon}
                                    onClick={() => (onClickSetTags(filterTags, setFilterTags, filter.tag))}
                                    tags={filterTags}
                                    tag={filter.tag} />
                            ))}
                        </div>
                    </div>
                    <div className="nation">
                        <h6>Нация</h6>
                        <div className="buttons">
                            {filterNation.map((filter) => (
                                <FilterButton
                                    key={filter.icon}
                                    icon={filter.icon}
                                    onClick={() => (onClickSetTags(filterTags, setFilterTags, filter.tag))}
                                    tags={filterTags}
                                    tag={filter.tag} />
                            ))}
                        </div>
                    </div>
                    <div className="level">
                        <h6>Уровень</h6>
                        <div className="buttons">
                            {filterLevel.map((filter) => (
                                <FilterButton
                                    key={filter.title}
                                    title={filter.title}
                                    onClick={() => (onClickSetTags(filterTags, setFilterTags, filter.tag))}
                                    tags={filterTags}
                                    tag={filter.tag} />
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
