import {Button} from "react-bootstrap";

const {useAccordionButton} = require("react-bootstrap");

export function CustomToggle({ children, eventKey, onSetFilter }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        onSetFilter()
    );

    return (
        <Button
            onClick={decoratedOnClick}>
            {children}
        </Button>
    );
}

export default CustomToggle;
