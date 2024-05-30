import { FilterTags } from "../../../shared/types";

export function onClickSetTags(filterTags: FilterTags[], setFilterTags: (filterTags: FilterTags[]) => void, tag: FilterTags): void {
    let isNewTag: boolean = (filterTags.includes(tag));

    if (isNewTag) {
        let tagIndex: number = (filterTags.indexOf(tag));
        let copyArray: FilterTags[] = filterTags;

        copyArray.splice(tagIndex, 1);
        setFilterTags(copyArray);
    } else {
        let copyArray: FilterTags[] = filterTags;

        copyArray.push(tag);
        setFilterTags(copyArray);
    };
};