import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {RingLoader} from "react-spinners";
import {Card} from "react-bootstrap";

export const NotFound = () => {
    let color = useState("#b1deec");

    return(
        <Card>
            <h1>404 - Not Found!</h1>
            <Link to="/">
                Go Home
            </Link>

            <RingLoader  color={color} loading={true} size={50} margin={2}/>
        </Card>
    )
}
export default NotFound;