import {Button, Card, CardImg, Container} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

function Blog() {
    let params = useParams();
    let navigate = useNavigate();
    console.log(params);
    const {id} = params;

    return (
        <Container className="pt-4">
            <Button className="mb-3" onClick={() => navigate('/')}>
                Go back
            </Button>

            <Card>
                <Card.Header>{id}</Card.Header>
                <Card.Body>
                    <Card.Title>{id}</Card.Title>
                </Card.Body>
            </Card>
            <Button className="mt-3" onClick={() => navigate('/')}>
                Go back
            </Button>
        </Container>
    );
}

export default Blog;
