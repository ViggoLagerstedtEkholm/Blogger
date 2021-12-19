import {Button, Card, Container} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetBlog} from "../API/BlogAPI";
import NotFound from "./States/NotFound";
import Loading from "./States/Loading";

function Blog() {
    const [exists, setExists] = useState(true);
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState(true);

    let params = useParams();
    let navigate = useNavigate();

    const {id} = params;

    useEffect(() =>{
        if(id){
            GetBlog(id).then(response =>{
                setBlog(response);
                setLoading(false);
            }).catch(error =>{
                console.log(error);
                setExists(false);
                setLoading(false);
            })
        }
    }, [id])

    if(!exists){
        return <NotFound/>;
    }

    if(loading){
        return <Loading/>
    }

    return (
        <Container className="pt-4">
            <Button className="mb-3" onClick={() => navigate('/')}>
                Go back
            </Button>
            <Card>
                <Card.Header>{blog.title}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${blog.image}`}/>
                    <hr/>
                    <Card.Title>{blog.text}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    {new Date(blog.date).toDateString()}
                </Card.Footer>
            </Card>

            <Button className="mt-3" onClick={() => navigate('/')}>
                Go back
            </Button>
        </Container>
    );
}

export default Blog;
