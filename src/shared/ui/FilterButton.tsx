import { Button } from "antd";

import { FilterTags } from "../types";

interface FilterButtonProps {
    title?: string,
    icon?: string,
    onClick: () => void,
    tags: FilterTags[],
    tag: FilterTags
}

export function FilterButton({ title, icon, onClick, tags, tag }: FilterButtonProps) {

    return (
        (icon !== undefined) ? (
            <Button
                icon={<img src={icon} />}
                onClick={onClick}
                danger={(tags.includes(tag))} />
        ) : (
            <Button
                onClick={onClick}
                danger={(tags.includes(tag))}>{title}</Button>
        )
    )
}
