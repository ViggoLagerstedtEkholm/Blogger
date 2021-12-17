import {Card} from "react-bootstrap";
import BlogPreview from "./BlogPreview";
import Inputs from "../Filters/Inputs";
import {useEffect} from "react";
import {Search} from "./BlogAPI";
import {ContextProvider} from "../ContextProvider";
import Pagination from "../Filters/Pagination";

function BlogBox() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() =>{
        Search().then(response => {

        }).catch(error =>{

        });
    }, [])

    return (
        <ContextProvider>
            <Card className="p-0">
                <Card.Header>
                    <h1>Uploads</h1>
                    <Inputs/>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Feed
                    </Card.Title>
                    {
                        data.map((data, index) => <BlogPreview title={data}/>)
                    }
                </Card.Body>

                <Card.Footer>
                    <Pagination/>
                </Card.Footer>
            </Card>
        </ContextProvider>
    );
}

export default BlogBox;
