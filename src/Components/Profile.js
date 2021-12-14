import {Card, Col, Image, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

function Profile() {
    return (
        <Card className="text-black bg-light">
            <Card.Body>
                <Row>
                    <Col>
                        <Image src="https://picsum.photos/536/354" width="w-100" rounded />
                    </Col>
                    <Col>
                        <h1>Hello!</h1>
                        <h3>I'm Viggo Lagerstedt Ekholm,</h3>
                        <p>This blog will be used during my internship at AFRY. I will upload posts each week and try to document whatever i'm working on that week.</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Profile;