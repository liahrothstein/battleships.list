import { Button } from "antd";

interface FilterButtonProps {
    title?: string,
    icon?: string,
    onClick: () => void
}

export function FilterButton({ title, icon, onClick }: FilterButtonProps) {

    return (
        (icon !== undefined) ? (
            <Button
                icon={<img src={icon} />}
                onClick={onClick} />
        ) : (
            <Button onClick={onClick}>{title}</Button>
        )
    )
}
