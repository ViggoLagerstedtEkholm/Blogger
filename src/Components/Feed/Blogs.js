import {Container, Row} from "react-bootstrap";
import Info from "../InfoPanels/Info";
import BlogBox from "./BlogBox";
import Profile from "../InfoPanels/Profile";
import Add from "../Insert/Add";
import {ContextProvider} from "../ContextProvider";

function Blogs() {
    return (
        <Container className="p-3">
            <Row className="h-100 mt-3 text-white">
                <Info/>
            </Row>

            <Row className="h-100 mt-3 text-white">
                <Add/>
            </Row>

            <Row className="h-100 mt-3 text-white">
                <Profile/>
            </Row>

            <Row className="mt-3 text-black">
                <ContextProvider>
                    <BlogBox/>
                </ContextProvider>
            </Row>
        </Container>
    );
}

export default Blogs;