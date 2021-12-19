import {Button, Card, Col, Row} from "react-bootstrap";
import {useContext} from "react";
import {PageContext} from "../ContextProvider";

function Pagination(props) {
    const {page, setPage} = useContext(PageContext);
    const {totalPages} = props.pagination;

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
                        {
                            page > 1 ?
                            <Button className="w-100" onClick={() => previousPage()}>
                                Previous
                            </Button> :
                            <Button className="w-100" disabled>
                                Previous
                            </Button>
                        }
                    </Col>
                    <Col>
                        {
                            page < totalPages ?
                                <Button className="w-100" onClick={() => nextPage()}>
                                    Next
                                </Button> :
                                <Button className="w-100" disabled>
                                    Next
                                </Button>
                        }
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Pagination;