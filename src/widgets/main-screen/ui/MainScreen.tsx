import { useAppSelector } from "@store/hooks";

import './MainScreen.scss';

export function MainScreen() {
  const selectedVehicle = useAppSelector((state) => (state.selectedVehicle));

  return (
    (selectedVehicle.title !== '') ?
      (<div className="mainScreen selected">
        <img src={selectedVehicle.icon} alt="vehicle" className="vehicle" />
        <div className="informationBlock">
          <img src={selectedVehicle.nation} alt="nation" className="nation" />
          <div className="levelTypeAndTitle">
            <h1 className="level">{selectedVehicle.level}</h1>
            <img src={selectedVehicle.type} alt="type" className="type" />
            <h1 className="title">{selectedVehicle.title}</h1>
          </div>
          <div className="descriptionBlock">
            <h3>Историческая справка</h3>
            <p className="description">{selectedVehicle.description}</p>
          </div>
        </div>
      </div>) : (<div className="mainScreen" />)
  )
}
