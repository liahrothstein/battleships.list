import { FilterTags, type VehicleFilterParams } from "../../../shared/types";

export function onClickSetTags(filterTags: FilterTags[], setFilterTags: (filterTags: FilterTags[]) => void, tag: FilterTags): void {
    let isNewTag: boolean = (filterTags.includes(tag));

    if (isNewTag) {
        let tagIndex: number = (filterTags.indexOf(tag));
        let copyArray: FilterTags[] = new Array(...filterTags);

        copyArray.splice(tagIndex, 1);
        setFilterTags(copyArray);
    } else {
        let copyArray: FilterTags[] = new Array(...filterTags);

        copyArray.push(tag);
        setFilterTags(copyArray);
    };
};

export function filterVehicles(filterTags: FilterTags[], vehicles: VehicleFilterParams[]) {
    let array = new Array();

    filterTags.forEach((tag) => {
        switch (tag) {
            case FilterTags.Destroyer:
                array.push(...vehicles.filter((vehicle) => (vehicle.type.name === 'destroyer')));
                break;
            case FilterTags.Cruiser:
                array.push(...vehicles.filter((vehicle) => (vehicle.type.name === 'cruiser')));
                break;
            case FilterTags.Battleship:
                array.push(...vehicles.filter((vehicle) => (vehicle.type.name === 'battleship')));
                break;
            case FilterTags.Aircarrier:
                array.push(...vehicles.filter((vehicle) => (vehicle.type.name === 'aircarrier')));
                break;
            case FilterTags.Submarine:
                array.push(...vehicles.filter((vehicle) => (vehicle.type.name === 'submarine')));
                break;
            case FilterTags.Commonwealth:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'commonwealth')));
                break;
            case FilterTags.Europe:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'europe')));
                break;
            case FilterTags.France:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'france')));
                break;
            case FilterTags.Germany:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'germany')));
                break;
            case FilterTags.Italy:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'italy')));
                break;
            case FilterTags.Japan:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'japan')));
                break;
            case FilterTags.Netherlands:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'netherlands')));
                break;
            case FilterTags.PanAmerica:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'pan_america')));
                break;
            case FilterTags.PanAsia:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'pan_asia')));
                break;
            case FilterTags.Spain:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'spain')));
                break;
            case FilterTags.UK:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'uk')));
                break;
            case FilterTags.USA:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'usa')));
                break;
            case FilterTags.USSR:
                array.push(...vehicles.filter((vehicle) => (vehicle.nation.name === 'ussr')));
                break;
            case FilterTags.I:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 1)));
                break;
            case FilterTags.II:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 2)));
                break;
            case FilterTags.III:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 3)));
                break;
            case FilterTags.IV:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 4)));
                break;
            case FilterTags.V:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 5)));
                break;
            case FilterTags.VI:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 6)));
                break;
            case FilterTags.VII:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 7)));
                break;
            case FilterTags.VIII:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 8)));
                break;
            case FilterTags.IX:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 9)));
                break;
            case FilterTags.X:
                array.push(...vehicles.filter((vehicle) => (vehicle.level === 10)));
                break;
        }
    });

    array.sort((a, b) => {
        if (a.nation.name > a.nation.name) return (1);
        if (a.nation.name === a.nation.name) return (0);
        if (a.nation.name < a.nation.name) return (-1);
    });

    return (array);
};