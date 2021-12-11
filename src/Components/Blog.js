import {Container, Row} from "react-bootstrap";
import Info from "./Info";
import BlogBox from "./BlogBox";

function Blog() {
    return (
        <Container className="p-3">
            <Row className="h-100 mt-3 text-white">
                <Info/>
            </Row>

            <Row className="mt-3 text-black">
                <BlogBox/>
            </Row>
        </Container>
    );
}

export default Blog;