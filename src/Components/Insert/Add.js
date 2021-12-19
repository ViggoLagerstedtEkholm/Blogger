import {Accordion, Button, Card, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {UploadBlog} from "../API/BlogAPI";

function Add() {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [secret, setSecret] = useState();
    const [image, setImage] = useState();

    const onSubmit = (e) =>{
        e.preventDefault();

        const blog = {
            Title : title,
            Body : body,
            Secret : secret
        };

        UploadBlog(blog).then(response => {
            console.log(response);
        }).catch(error =>{
            console.log(error);
        });
    }

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Add Blog Post</Accordion.Header>
                <Accordion.Body>
                    <Card className="text-black">
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Row>
                                    <Form.Group controlId="formPlaintextPassword">
                                        <h2>Title</h2>
                                        <Form.Control type="text"
                                                      placeholder="Title"
                                                      value={title}
                                                      onChange={e => setTitle(e.target.value)}/>
                                    </Form.Group>
                                </Row>

                                <Row className="my-3">
                                    <Form.Group controlId="formPlaintextPassword">
                                        <h2>Body</h2>

                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter blog body"
                                            value={body}
                                            onChange={e => setBody(e.target.value)}
                                            style={{ height: '200px' }}/>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Blog image</Form.Label>
                                        <Form.Control type="file" onChange={e => setImage(e.target)}/>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group controlId="formPlaintextPassword">
                                        <h2>Secret</h2>
                                        <Form.Control type="text" placeholder="XXXXXXXXXX" onChange={e => setSecret(e.target.value)}/>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Button className="w-100 my-3" onClick={() => null} type="submit">
                                        Post
                                    </Button>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Add;