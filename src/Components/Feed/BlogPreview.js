import {Button, Card} from "react-bootstrap";

function BlogPreview(props) {
    const {date, id, text, title} = props.data;

    return (
        <Card className="my-2 mx-3 bg-light">
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>

                <Card.Text className="preview-text">
                    {text}
                </Card.Text>
                <Button href={"/blog/" + id} className="btn-primary w-100">Visit</Button>
            </Card.Body>
            <Card.Footer>
                {new Date(date).toDateString()}
            </Card.Footer>
        </Card>
    );
}

export default BlogPreview;
