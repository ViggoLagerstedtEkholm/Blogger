import {Button, Card, Col, Row} from "react-bootstrap";
import {MdClear} from "react-icons/md";

function FilterOverview(props) {
    const {search, filterOption, order, onFilterClose} = props;

    return (
        <Card className="p-0 mt-3">
            <Card.Header>
                <Row>
                    <Col>
                        <h1>Filter Overview</h1>
                    </Col>
                    <Col className="d-flex justify-content-end align-content-center">
                        <MdClear className="h-100" onClick={() => onFilterClose()}/>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="bg-light">
                <Card.Title>
                    Filters
                </Card.Title>

                <Card.Text>
                    <h2>
                        Search : {search ?? <b>None</b>}
                    </h2>
                    <h2>
                        Filter Option : {filterOption ?? <b>None</b>}
                    </h2>
                    <h2>
                        Order : {order ?? <b>None</b>}
                    </h2>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FilterOverview;
