import { usePathname } from "next/navigation";

export function usePathNameByChildUrl() {
    const pathName = usePathname();
    const childUrl = pathName.split("/")[2];
    return pathName;
}