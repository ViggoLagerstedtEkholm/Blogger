import {Card} from "react-bootstrap";
import BlogPreview from "./BlogPreview";
import Filter from "./Filter";

function BlogBox() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Card className="p-0">
            <Card.Header>
                <h1>Uploads</h1>
                <Filter/>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    Feed
                </Card.Title>
                {
                    data.map((data, index) => <BlogPreview title={data}/>)
                }
            </Card.Body>
        </Card>
    );
}

export default BlogBox;
