import {Button, Card, Container} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetBlog} from "./BlogAPI";
import NotFound from "./States/NotFound";

function Blog() {
    const [exists, setExists] = useState(true);

    let params = useParams();
    let navigate = useNavigate();

    const {id} = params;

    useEffect(() =>{
        if(id){
            GetBlog(id).then(() =>{

            }).catch(() =>{
                setExists(false);
            })
        }
    }, [id])

    if(!exists){
        return <NotFound/>;
    }

    return (
        <Container className="pt-4">
            <Button className="mb-3" onClick={() => navigate('/')}>
                Go back
            </Button>

            <Card>
                <Card.Header>{id}</Card.Header>
                <Card.Body>
                    <Card.Title>{id}</Card.Title>
                </Card.Body>
            </Card>

            <Button className="mt-3" onClick={() => navigate('/')}>
                Go back
            </Button>
        </Container>
    );
}

export default Blog;
