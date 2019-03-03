import * as React from "react";
import { ClickableProps } from "./props";
import { Button, Link } from "../../commons/styled";

export const ClickableButton: React.FC<ClickableProps> = (props) => {
    const { name, href, localize } = props;
    return <Button><Link href={href}>Submit</Link></Button>;
}

ClickableButton.defaultProps = {
    name: "actions.submit",
    href: "/"
}