import type { ComponentProps } from "react";

export default function Tile(props: ComponentProps<"div">) {
    return (
        <div {...props}>
            {props.children}
        </div>
    );
}