import { matchingTypeTags, matchingNationTags, matchingLevelTags } from "@constants/index";
import { FilterTags, type VehicleFilterParams } from "../../../shared/types";

export function onClickSetTags(filterTags: FilterTags[], setFilterTags: (filterTags: FilterTags[]) => void, tag: FilterTags): void {
    let isPresentTag: boolean = (filterTags.includes(tag));

    if (isPresentTag) {
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
    let resultArray = new Array();

    switch (tag) {
        case FilterTags.Destroyer:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'destroyer')));
            break;
        case FilterTags.Cruiser:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'cruiser')));
            break;
        case FilterTags.Battleship:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'battleship')));
            break;
        case FilterTags.Aircarrier:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'aircarrier')));
            break;
        case FilterTags.Submarine:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.type.name === 'submarine')));
            break;
    };

    return (resultArray);
};

function filterNation(tag: FilterTags, sourceArray: VehicleFilterParams[]) {
    let resultArray = new Array();

    switch (tag) {
        case FilterTags.Commonwealth:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'commonwealth')));
            break;
        case FilterTags.Europe:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'europe')));
            break;
        case FilterTags.France:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'france')));
            break;
        case FilterTags.Germany:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'germany')));
            break;
        case FilterTags.Italy:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'italy')));
            break;
        case FilterTags.Japan:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'japan')));
            break;
        case FilterTags.Netherlands:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'netherlands')));
            break;
        case FilterTags.PanAmerica:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'pan_america')));
            break;
        case FilterTags.PanAsia:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'pan_asia')));
            break;
        case FilterTags.Spain:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'spain')));
            break;
        case FilterTags.UK:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'uk')));
            break;
        case FilterTags.USA:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'usa')));
            break;
        case FilterTags.USSR:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.nation.name === 'ussr')));
            break;
    };

    return (resultArray);
};

function filterLevel(tag: FilterTags, sourceArray: VehicleFilterParams[]) {
    let resultArray = new Array();

    switch (tag) {
        case FilterTags.I:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 1)));
            break;
        case FilterTags.II:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 2)));
            break;
        case FilterTags.III:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 3)));
            break;
        case FilterTags.IV:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 4)));
            break;
        case FilterTags.V:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 5)));
            break;
        case FilterTags.VI:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 6)));
            break;
        case FilterTags.VII:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 7)));
            break;
        case FilterTags.VIII:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 8)));
            break;
        case FilterTags.IX:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 9)));
            break;
        case FilterTags.X:
            resultArray.push(...sourceArray.filter((vehicle) => (vehicle.level === 10)));
            break;
    };

    return (resultArray);
};

function isFilterTypeCheck(tags: FilterTags[], matchingTypeTags: Set<FilterTags>): boolean {
    return (
        tags.some((tag) => (
            matchingTypeTags.has(tag)
        ))
    );
};

function isFilterNationCheck(tags: FilterTags[], matchingNationTags: Set<FilterTags>): boolean {
    return (
        tags.some((tag) => (
            matchingNationTags.has(tag)
        ))
    );
};

function isFilterLevelCheck(tags: FilterTags[], matchingLevelTags: Set<FilterTags>): boolean {
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

function compareLevels(a: VehicleFilterParams, b: VehicleFilterParams) {
    let aLevel: number = a.level;
    let bLevel: number = b.level;

    if (aLevel > bLevel) {
        return (1);
    } else if (aLevel === bLevel) {
        return (0);
    } else {
        return (-1);
    };
};

export function filterVehicles(filterTags: FilterTags[], vehicles: VehicleFilterParams[]) {
    let resultArrayOne = new Array();
    let resultArrayTwo = new Array();
    let resultArrayThree = new Array();

    let isFilterType: boolean = isFilterTypeCheck(filterTags, matchingTypeTags);
    let isFilterNation: boolean = isFilterNationCheck(filterTags, matchingNationTags);
    let isFilterLevel: boolean = isFilterLevelCheck(filterTags, matchingLevelTags);

    if (isFilterType && isFilterNation && isFilterLevel) {
        filterTags.forEach((tag) => {
            resultArrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            resultArrayTwo.push(...filterNation(tag, resultArrayOne));
        });
        filterTags.forEach((tag) => {
            resultArrayThree.push(...filterLevel(tag, resultArrayTwo));
        });

        resultArrayThree.sort(compareLevels);
        resultArrayThree.sort(compareNations);
        return (resultArrayThree);
    } else if (isFilterType && isFilterNation) {
        filterTags.forEach((tag) => {
            resultArrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            resultArrayTwo.push(...filterNation(tag, resultArrayOne));
        });

        resultArrayTwo.sort(compareLevels);
        resultArrayTwo.sort(compareNations);
        return (resultArrayTwo);
    } else if (isFilterNation && isFilterLevel) {
        filterTags.forEach((tag) => {
            resultArrayOne.push(...filterNation(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            resultArrayTwo.push(...filterLevel(tag, resultArrayOne));
        });

        resultArrayTwo.sort(compareLevels);
        resultArrayTwo.sort(compareNations);
        return (resultArrayTwo);
    } else if (isFilterType && isFilterLevel) {
        filterTags.forEach((tag) => {
            resultArrayOne.push(...filterType(tag, vehicles));
        });
        filterTags.forEach((tag) => {
            resultArrayTwo.push(...filterLevel(tag, resultArrayOne));
        });

        resultArrayTwo.sort(compareLevels);
        resultArrayTwo.sort(compareNations);
        return (resultArrayTwo);
    } else if (isFilterType) {
        filterTags.forEach((tag) => {
            resultArrayOne.push(...filterType(tag, vehicles));
        });

        resultArrayOne.sort(compareLevels);
        resultArrayOne.sort(compareNations);
        return (resultArrayOne);
    } else if (isFilterNation) {
        filterTags.forEach((tag) => {
            resultArrayOne.push(...filterNation(tag, vehicles));
        });

        resultArrayOne.sort(compareLevels);
        resultArrayOne.sort(compareNations);
        return (resultArrayOne);
    } else if (isFilterLevel) {
        filterTags.forEach((tag) => {
            resultArrayOne.push(...filterLevel(tag, vehicles));
        });

        resultArrayOne.sort(compareLevels);
        resultArrayOne.sort(compareNations);
        return (resultArrayOne);
    } else {
        return (vehicles)
    };
};