import {Card} from "react-bootstrap";

export function FeedInfo(props) {
    const {page} = props;

    return (
        <Card className="bg-opacity-25 bg-info">
            <Card.Header>
                Feed Display Options
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>Page: <b>{page}</b></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FeedInfo;
