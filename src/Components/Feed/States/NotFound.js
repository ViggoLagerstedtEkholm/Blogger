import React, {useState} from 'react';
import {RingLoader} from "react-spinners";
import {Button, Card, Col, Row} from "react-bootstrap";

export const NotFound = () => {
    let color = useState("#b1deec");

    return(
        <Card className="bg-transparent text-white">
            <Card.Body>
                <Row>
                    <Col>
                        <h4>404 - Not Found!</h4>
                    </Col>
                </Row>

                <Row className="my-3 m-lg-3">
                    <Button href="/">
                        Go Home
                    </Button>
                </Row>

                <Row className="justify-content-md-center">
                    <RingLoader color={color} loading={true} size={100}/>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default NotFound;