import { ChevronDown } from "lucide-react";

type DropdownProps<T> = {
    items: T[];
    value: T | null;
    onChange: (item: T) => void;
    getLabel: (item: T) => string;
};

export function Dropdown<T>({
    items,
    value,
    onChange,
    getLabel,
}: DropdownProps<T>) {
    return (
        <>
            <select
                value={value ? getLabel(value) : ""}
                onChange={(e) => {
                    const selected = items.find(
                        (item) => getLabel(item) === e.target.value
                    );

                    if (selected) {
                        onChange(selected);
                    }
                }}
                className="relative appearance-none border border-border/30 rounded-sm px-4  py-2"
            >
                <option className="" value="">Select an option</option>
                {items.map((item, index) => (
                    <option key={index} value={getLabel(item)}>
                        {getLabel(item)}
                    </option>
                ))}
            </select>
            <ChevronDown
                className="pointer-events-none absolute right-0 top-0 -translate-y-1/2"
                size={18}
            />
        </>
    );
}