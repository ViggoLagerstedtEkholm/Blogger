import {Card, Col, Image, Row} from "react-bootstrap";
import Github from '../../Images/GitHub-Mark-64px.png';
import LinkedIn from '../../Images/linkedin.svg';
import ProfileImage from '../../Images/pfp.jpg';

function Profile() {
    return (
        <Card className="text-black bg-light">
            <Card.Body>
                <div className="text-center">
                    <Image src={ProfileImage} height={350} width={350} rounded/>
                </div>

                <Row className="my-3">
                    <hr/>
                    <h1>Hello!</h1>
                    <h3>I'm Viggo Lagerstedt Ekholm,</h3>
                    <p>This blog will be used during my internship at AFRY. I will upload posts each week and try to document whatever i'm working on.</p>
                </Row>

                <Row className="float-start">
                    <Col>
                        <a href="https://github.com/ViggoLagerstedtEkholm">
                            <Image src={Github}/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/viggo-lagerstedt-009a21169/">
                            <Image src={LinkedIn} width={75} height={64}/>
                        </a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Profile;