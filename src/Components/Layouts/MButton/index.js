import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

const MButton = (props) => {
    return <Button onClick={props.onClick} disabled={props.disabled}
                   style={{background: props.color}}>{props.text}</Button>
}

MButton.propTypes = {
    color: PropTypes.string.isRequired
}

export default MButton