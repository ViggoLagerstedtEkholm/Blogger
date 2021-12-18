import {Accordion, Alert, Card, Col, Dropdown, Form, Row} from "react-bootstrap";
import {useContext, useState} from "react";
import CustomToggle from "./CustomToggle";
import FilterOverview from "./FilterOverview";
import {OptionContext, OrderContext, SearchContext} from "../ContextProvider";

function Inputs() {
    const {search , setSearch} = useContext(SearchContext);
    const {option , setOption} = useContext(OptionContext);
    const {order , setOrder} = useContext(OrderContext);
    const [opened, setOpened] = useState(false);

    const onFilter = () =>{
        setOpened(true);
    }

    const onFilterClose = () =>{
        setOpened(false);
    }

    const onSetFilterOption = (target) =>{
        setOption(target.text);
        onFilterClose();
    }

    const onSetSearch = (value) =>{
        setSearch(value);
        onFilterClose();
    }

    const onSetOrder = (target) =>{
        setOrder(target.text);
        onFilterClose();
    }

    return (
        <Card className="p-3">
            <Accordion>
                <Accordion.Item eventKey="0" className="bg-light">
                    <Accordion.Header>Search</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Dropdown>
                                <h3>Filter by</h3>
                                <Dropdown.Toggle variant="primary w-100" id="dropdown-basic">
                                    Filter by
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={e => onSetFilterOption(e.target)}>Title</Dropdown.Item>
                                    <Dropdown.Item onClick={e => onSetFilterOption(e.target)}>Date</Dropdown.Item>
                                </Dropdown.Menu>

                                <Alert className="mt-3">Selected Filter Option : <b>{option}</b></Alert>
                            </Dropdown>
                        </Row>

                        <hr/>

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
                                        Filter order
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={e => onSetOrder(e.target)}>Ascending</Dropdown.Item>
                                        <Dropdown.Item onClick={e => onSetOrder(e.target)}>Descending</Dropdown.Item>
                                    </Dropdown.Menu>

                                    <Alert className="my-3">Selected Filter Option : <b>{order}</b></Alert>
                                </Dropdown>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="mt-3">
                            <CustomToggle eventKey="0" onSetFilter={() => onFilter()}>Search</CustomToggle>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {opened ? <FilterOverview onFilterClose={onFilterClose}/> : null}
        </Card>

    );
}

export default Inputs;