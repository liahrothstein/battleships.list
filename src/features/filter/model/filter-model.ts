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
    let matchingTypeTags = new Set<FilterTags>([
        FilterTags.Destroyer,
        FilterTags.Cruiser,
        FilterTags.Battleship,
        FilterTags.Aircarrier,
        FilterTags.Submarine
    ]);

    return (
        tags.some((tag) => (
            matchingTypeTags.has(tag)
        ))
    );
};

function isFilterNationCheck(tags: FilterTags[]): boolean {
    let matchingNationTags = new Set<FilterTags>([
        FilterTags.Commonwealth,
        FilterTags.Europe,
        FilterTags.France,
        FilterTags.Germany,
        FilterTags.Italy,
        FilterTags.Japan,
        FilterTags.Netherlands,
        FilterTags.PanAmerica,
        FilterTags.PanAsia,
        FilterTags.Spain,
        FilterTags.UK,
        FilterTags.USA,
        FilterTags.USSR
    ]);

    return (
        tags.some((tag) => (
            matchingNationTags.has(tag)
        ))
    );
};

function isFilterLevelCheck(tags: FilterTags[]): boolean {
    let matchingLevelTags = new Set<FilterTags>([
        FilterTags.I,
        FilterTags.II,
        FilterTags.III,
        FilterTags.IV,
        FilterTags.V,
        FilterTags.VI,
        FilterTags.VII,
        FilterTags.VIII,
        FilterTags.IX,
        FilterTags.X
    ]);

    return (
        tags.some((tag) => (
            matchingLevelTags.has(tag)
        ))
    );
};

function compareNations(a: VehicleFilterParams, b: VehicleFilterParams) {
    let aNation: string = a.nation.name;
    let bNation: string = b.nation.name;

    if (aNation > bNation) {
        return (1);
    } else if (aNation === bNation) {
        return (0);
    } else {
        return (-1);
    };
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

        arrayThree.sort(compareNations);
        return (arrayThree);
    } else if (isFilterType && isFilterNation) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            arrayTwo.push(...filterNation(tag, arrayOne));
        });

        arrayTwo.sort(compareNations);
        return (arrayTwo);
    } else if (isFilterNation && isFilterLevel) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterNation(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            arrayTwo.push(...filterLevel(tag, arrayOne));
        });

        arrayTwo.sort(compareNations);
        return (arrayTwo);
    } else if (isFilterType && isFilterLevel) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            arrayTwo.push(...filterLevel(tag, arrayOne));
        });

        arrayTwo.sort(compareNations);
        return (arrayTwo);
    } else if (isFilterType) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterType(tag, vehicles));
        });

        arrayOne.sort(compareNations);
        return (arrayOne);
    } else if (isFilterNation) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterNation(tag, vehicles));
        });

        arrayOne.sort(compareNations);
        return (arrayOne);
    } else if (isFilterLevel) {
        filterTags.forEach((tag) => {
            arrayOne.push(...filterLevel(tag, vehicles));
        });

        arrayOne.sort(compareNations);
        return (arrayOne);
    } else {
        return (vehicles)
    };
};