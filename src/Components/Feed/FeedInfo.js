import {Card} from "react-bootstrap";

export function FeedInfo(props) {
    const {page, pagination} = props;
    const {pageFirstResultIndex, resultsPerPage} = pagination;

    return (
        <Card className="bg-opacity-25 bg-info">
            <Card.Header>
                Feed Display Options
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Page: <b>{page}</b>
                    <br/>
                    Range: <b>[{pageFirstResultIndex + 1} - {pageFirstResultIndex + resultsPerPage}]</b>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default FeedInfo;
