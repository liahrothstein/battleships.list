import { FilterTags } from "../types";

export const matchingTypeTags = new Set<FilterTags>([
    FilterTags.Destroyer,
    FilterTags.Cruiser,
    FilterTags.Battleship,
    FilterTags.Aircarrier,
    FilterTags.Submarine
]);

export const matchingNationTags = new Set<FilterTags>([
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

export const matchingLevelTags = new Set<FilterTags>([
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