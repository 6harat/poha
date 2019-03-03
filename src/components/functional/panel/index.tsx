import * as React from "react";
import { DockableProps } from "./props";

export const Panel: React.FC<DockableProps> = (props) => {
    const { align } = props;
    return <div className={align}></div>;
}