import { Button } from "antd";

interface FilterButtonProps {
    title?: string,
    icon?: string
}

export function FilterButton({ title, icon }: FilterButtonProps) {

    return (
        (icon !== undefined) ? (
            <Button icon={<img src={icon} />} />
        ) : (
            <Button>{title}</Button>
        )
    )
}
