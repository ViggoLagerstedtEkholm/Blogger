import {Accordion, Alert, Card, Col, Dropdown, Form, Row} from "react-bootstrap";
import {useContext} from "react";
import {OrderContext, SearchContext} from "../ContextProvider";

function Inputs() {
    const {search , setSearch} = useContext(SearchContext);
    const {order , setOrder} = useContext(OrderContext);

    const onSetSearch = (value) =>{
        setSearch(value);
    }

    const onSetOrder = (target) =>{
        setOrder(target.text);
    }

    return (
        <Card className="p-3">
            <Accordion>
                <Accordion.Item eventKey="0" className="bg-light">
                    <Accordion.Header>Search</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Form>
                                <h3>Search</h3>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Search" value={search} onChange={e => onSetSearch(e.target.value)}/>
                                </Form.Group>
                            </Form>
                        </Row>

                        <hr/>

                        <Row className="mt-3">
                            <Col>
                                <Dropdown>
                                    <h3>Filter order</h3>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Filter date by
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={e => onSetOrder(e.target)}>Ascending</Dropdown.Item>
                                        <Dropdown.Item onClick={e => onSetOrder(e.target)}>Descending</Dropdown.Item>
                                    </Dropdown.Menu>

                                    <Alert className="my-3">Selected Filter Option : <b>{order}</b></Alert>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card>

    );
}

export default Inputs;