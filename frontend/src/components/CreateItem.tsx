import React, { useState } from "react";
import { Container, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";

function CreateItem() {
  const url = "http://localhost:5000/";
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const saveItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: body,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleBody = (e: any) => {
    setBody(e.target.value);
  };

  return (
    <Container className="mt-5">
      <Col className="p-2">
        <Form onSubmit={saveItem} id="save">
          <div className="create">
            <Form.Control
              type="text"
              placeholder="Title"
              defaultValue={title}
              onChange={(e) => handleTitle(e)}
            />
            <Form.Control
              type="text"
              placeholder="Content"
              defaultValue={body}
              onChange={(e) => handleBody(e)}
              style={{ marginTop: "10px" }}
            />
            <InputGroup.Prepend>
              <Button
                type="submit"
                variant={"danger"}
                style={{ marginTop: "10px", width: "100%" }}
              >
                Create
              </Button>
            </InputGroup.Prepend>
          </div>
        </Form>
      </Col>
    </Container>
  );
}

export default CreateItem;
