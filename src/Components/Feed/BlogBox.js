import {Card, Row} from "react-bootstrap";
import BlogPreview from "./BlogPreview";
import Inputs from "../Filters/Inputs";
import {useContext, useEffect, useState} from "react";
import {Search} from "../API/BlogAPI";
import {OptionContext, OrderContext, PageContext, SearchContext} from "../ContextProvider";
import Pagination from "../Filters/Pagination";
import Loading from "./States/Loading";
import FeedInfo from "./FeedInfo";

function BlogBox() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const {search} = useContext(SearchContext);
    const {option} = useContext(OptionContext);
    const {order} = useContext(OrderContext);
    const {page} = useContext(PageContext);

    useEffect(() =>{
        const filter = {
            search,
            option,
            order,
            page
        };

        Search(filter).then(response => {
            setBlogs(response);
            setLoading(false);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
        });
    }, [page])

    const renderItems = () =>{
        if(loading){
            return <Loading/>
        }

        if(blogs.length === 0){
            return <Card className="m-2">
                <Card.Body>
                    <h4>No results</h4>
                </Card.Body>
            </Card>
        }

        return blogs.map((data) => <BlogPreview data={data}/>)
    }

    return (
        <Card className="p-0">
            <Card.Header>
                <h1>Uploads</h1>
                <Inputs/>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <FeedInfo page={page}/>
                </Card.Title>
            </Card.Body>

            {renderItems()}

            <Card.Footer>
                <Pagination/>
            </Card.Footer>
        </Card>
    );
}

export default BlogBox;
