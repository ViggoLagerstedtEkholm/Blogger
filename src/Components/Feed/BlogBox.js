import {Card} from "react-bootstrap";
import BlogPreview from "./BlogPreview";
import Inputs from "../Filters/Inputs";
import {useContext, useEffect, useState} from "react";
import {Search} from "../API/BlogAPI";
import {OrderContext, PageContext, SearchContext} from "../ContextProvider";
import Pagination from "../Filters/Pagination";
import Loading from "./States/Loading";
import FeedInfo from "./FeedInfo";

function BlogBox() {
    const [blogs, setBlogs] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);

    const {search} = useContext(SearchContext);
    const {order} = useContext(OrderContext);
    const {page} = useContext(PageContext);

    useEffect(() =>{
        const filter = {
            search,
            order,
            page
        };

        Search(filter).then(response => {
            const {blogs, pagination} = response;

            setBlogs(blogs);
            setPagination(pagination);
            setLoading(false);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
        });
    }, [search, order, page])

    const renderItems = () =>{
        if(blogs.length === 0){
            return <Card className="m-2">
                <Card.Body>
                    <h4>No results</h4>
                </Card.Body>
            </Card>
        }

        return blogs.map((data, key) => <BlogPreview key={key} data={data}/>)
    }

    return (
        <Card className="p-0">
            <Card.Header>
                <h1>Uploads</h1>
                <Inputs/>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {
                        loading ? <Loading/> : <FeedInfo page={page} pagination={pagination}/>
                    }
                </Card.Title>
            </Card.Body>

            {
                loading ? <Loading/> : renderItems()
            }

            <Card.Footer>
                {
                    loading ? <Loading/> : <Pagination pagination={pagination}/>
                }
            </Card.Footer>
        </Card>
    );
}

export default BlogBox;
