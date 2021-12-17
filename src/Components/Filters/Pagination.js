import {Button, Card, Col, Row} from "react-bootstrap";
import {useContext, useState} from "react";
import {PageContext} from "../ContextProvider";

function Pagination() {
    const {page, setPage} = useContext(PageContext);

    const nextPage = () =>{
        setPage(page + 1);
    }

    const previousPage = () =>{
        setPage(page - 1);
    }

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Button className="w-100" onClick={() => previousPage()}>
                            Previous
                        </Button>
                    </Col>
                    <Col>
                        <Button className="w-100" onClick={() => nextPage()}>
                            Next
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Pagination;