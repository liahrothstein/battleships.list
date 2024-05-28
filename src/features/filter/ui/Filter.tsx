import { useState } from "react";
import { Button } from "antd";
import { FilterOutlined } from '@ant-design/icons';

import destroyer from '../../../shared/assets/icons/destroyer.svg';
import cruiser from '../../../shared/assets/icons/cruiser.svg';
import battleship from '../../../shared/assets/icons/battleship.svg';
import aircarrier from '../../../shared/assets/icons/aircarrier.svg';
import submarine from '../../../shared/assets/icons/submarine.svg';
import commonwealth from '../../../shared/assets/icons/commonwealth.png';
import europe from '../../../shared/assets/icons/europe.png';
import france from '../../../shared/assets/icons/france.png';
import germany from '../../../shared/assets/icons/germany.png';
import italy from '../../../shared/assets/icons/italy.png';
import japan from '../../../shared/assets/icons/japan.png';
import netherlands from '../../../shared/assets/icons/netherlands.png';
import panAmerica from '../../../shared/assets/icons/pan-america.png';
import panAsia from '../../../shared/assets/icons/pan-asia.png';
import spain from '../../../shared/assets/icons/spain.jpg';
import UK from '../../../shared/assets/icons/uk.png';
import USA from '../../../shared/assets/icons/usa.png';
import USSR from '../../../shared/assets/icons/ussr.png';

import './Filter.scss';

export function Filter() {
    const [isModalOpen, toggleModal] = useState<boolean>(false);

    return (
        <>
            {isModalOpen && <div className="filterModal">
                <h3>Фильтр по параметрам</h3>
                <p>{`Отображаемая техника `}</p>
                <hr />
                <div className="filterSections">
                    <div className="type">
                        <h6>Тип</h6>
                        <div className="buttons">
                            <Button icon={<img src={destroyer} />} />
                            <Button icon={<img src={cruiser} />} />
                            <Button icon={<img src={battleship} />} />
                            <Button icon={<img src={aircarrier} />} />
                            <Button icon={<img src={submarine} />} />
                        </div>
                    </div>
                    <div className="nation">
                        <h6>Нация</h6>
                        <div className="buttons">
                            <Button icon={<img src={commonwealth} />} />
                            <Button icon={<img src={europe} />} />
                            <Button icon={<img src={france} />} />
                            <Button icon={<img src={germany} />} />
                            <Button icon={<img src={italy} />} />
                            <Button icon={<img src={japan} />} />
                            <Button icon={<img src={netherlands} />} />
                            <Button icon={<img src={panAmerica} />} />
                            <Button icon={<img src={panAsia} />} />
                            <Button icon={<img src={spain} />} />
                            <Button icon={<img src={UK} />} />
                            <Button icon={<img src={USA} />} />
                            <Button icon={<img src={USSR} />} />
                        </div>
                    </div>
                    <div className="level">
                        <h6>Уровень</h6>
                        <div className="buttons">
                            <Button>I</Button>
                            <Button>II</Button>
                            <Button>III</Button>
                            <Button>IV</Button>
                            <Button>V</Button>
                            <Button>VI</Button>
                            <Button>VII</Button>
                            <Button>VIII</Button>
                            <Button>IX</Button>
                            <Button>X</Button>
                        </div>
                    </div>
                </div>
            </div>}
            <Button
                className="filter"
                icon={<FilterOutlined />}
                onClick={() => (toggleModal(!isModalOpen))} />
        </>
    )
}
