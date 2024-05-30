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

function filterType(tag: FilterTags, sourceArray: VehicleFilterParams[]) {
    let array = new Array();

    switch (tag) {
        case FilterTags.Destroyer:
            array.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'destroyer')));
            break;
        case FilterTags.Cruiser:
            array.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'cruiser')));
            break;
        case FilterTags.Battleship:
            array.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'battleship')));
            break;
        case FilterTags.Aircarrier:
            array.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'aircarrier')));
            break;
        case FilterTags.Submarine:
            array.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'submarine')));
            break;
    };

    return (array);
};

function filterNation(tag: FilterTags, sourceArray: VehicleFilterParams[]) {
    let array = new Array();

    switch (tag) {
        case FilterTags.Commonwealth:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'commonwealth')));
            break;
        case FilterTags.Europe:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'europe')));
            break;
        case FilterTags.France:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'france')));
            break;
        case FilterTags.Germany:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'germany')));
            break;
        case FilterTags.Italy:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'italy')));
            break;
        case FilterTags.Japan:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'japan')));
            break;
        case FilterTags.Netherlands:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'netherlands')));
            break;
        case FilterTags.PanAmerica:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'pan_america')));
            break;
        case FilterTags.PanAsia:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'pan_asia')));
            break;
        case FilterTags.Spain:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'spain')));
            break;
        case FilterTags.UK:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'uk')));
            break;
        case FilterTags.USA:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'usa')));
            break;
        case FilterTags.USSR:
            array.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'ussr')));
            break;
    };

    return (array);
};

function filterLevel(tag: FilterTags, sourceArray: VehicleFilterParams[]) {
    let array = new Array();

    switch (tag) {
        case FilterTags.I:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 1)));
            break;
        case FilterTags.II:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 2)));
            break;
        case FilterTags.III:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 3)));
            break;
        case FilterTags.IV:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 4)));
            break;
        case FilterTags.V:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 5)));
            break;
        case FilterTags.VI:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 6)));
            break;
        case FilterTags.VII:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 7)));
            break;
        case FilterTags.VIII:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 8)));
            break;
        case FilterTags.IX:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 9)));
            break;
        case FilterTags.X:
            array.push(...sourceArray.filter((vehicle) => (vehicle.level === 10)));
            break;
    };

    return (array);
};

function isFilterTypeCheck(tags: FilterTags[]): boolean {
    if ((tags.includes(FilterTags.Destroyer)) ||
        (tags.includes(FilterTags.Cruiser)) ||
        (tags.includes(FilterTags.Battleship)) ||
        (tags.includes(FilterTags.Aircarrier)) ||
        (tags.includes(FilterTags.Submarine))) {
        return (true)
    } else {
        return (false)
    }
};

function isFilterNationCheck(tags: FilterTags[]): boolean {
    if ((tags.includes(FilterTags.Commonwealth)) ||
        (tags.includes(FilterTags.Europe)) ||
        (tags.includes(FilterTags.France)) ||
        (tags.includes(FilterTags.Germany)) ||
        (tags.includes(FilterTags.Italy)) ||
        (tags.includes(FilterTags.Japan)) ||
        (tags.includes(FilterTags.Netherlands)) ||
        (tags.includes(FilterTags.PanAmerica)) ||
        (tags.includes(FilterTags.PanAsia)) ||
        (tags.includes(FilterTags.Spain)) ||
        (tags.includes(FilterTags.UK)) ||
        (tags.includes(FilterTags.USA)) ||
        (tags.includes(FilterTags.USSR))) {
        return (true)
    } else {
        return (false)
    }
};

function isFilterLevelCheck(tags: FilterTags[]): boolean {
    if ((tags.includes(FilterTags.I)) ||
        (tags.includes(FilterTags.II)) ||
        (tags.includes(FilterTags.III)) ||
        (tags.includes(FilterTags.IV)) ||
        (tags.includes(FilterTags.V)) ||
        (tags.includes(FilterTags.VI)) ||
        (tags.includes(FilterTags.VII)) ||
        (tags.includes(FilterTags.VIII)) ||
        (tags.includes(FilterTags.IX)) ||
        (tags.includes(FilterTags.X))) {
        return (true)
    } else {
        return (false)
    }
};

export function filterVehicles(filterTags: FilterTags[], vehicles: VehicleFilterParams[]) {
    let arrayOne = new Array();
    let arrayTwo = new Array();
    let arrayThree = new Array();

    let isFilterType: boolean = isFilterTypeCheck(filterTags);
    let isFilterNation: boolean = isFilterNationCheck(filterTags);
    let isFilterLevel: boolean = isFilterLevelCheck(filterTags);

    if (isFilterType && isFilterNation && isFilterLevel) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            arrayTwo.push(...filterNation(tag, arrayOne));
        });
        filterTags.forEach((tag) => {
            arrayThree.push(...filterLevel(tag, arrayTwo));
        });

        return (arrayThree);
    } else if (isFilterType && isFilterNation) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            arrayTwo.push(...filterNation(tag, arrayOne));
        });

        return (arrayTwo);
    } else if (isFilterNation && isFilterLevel) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterNation(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            arrayTwo.push(...filterLevel(tag, arrayOne));
        });

        return (arrayTwo);
    } else if (isFilterType && isFilterLevel) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            arrayTwo.push(...filterLevel(tag, arrayOne));
        });

        return (arrayTwo);
    } else if (isFilterType) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterType(tag, vehicles));
        });

        return (arrayOne);
    } else if (isFilterNation) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterNation(tag, vehicles));
        });

        return (arrayOne);
    } else if (isFilterLevel) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterLevel(tag, vehicles));
        });

        return (arrayOne);
    } else {
        return (vehicles)
    };
};