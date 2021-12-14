import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function BlogPreview() {
    return (
        <Card className="my-4 bg-light">
            <Card.Body>
                <Card.Title>
                    Title
                </Card.Title>

                <Card.Text>
                    Text
                </Card.Text>

                <Link to="/blog/2" className="stretched-link media">test</Link>
            </Card.Body>

            <Card.Footer>
                Date
            </Card.Footer>
        </Card>
    );
}

export default BlogPreview;
