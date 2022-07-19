import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./index.css";

const AboutItem = () => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const url = "http://localhost:5000/";
  let item: { title: string; itemId: string; content: string } =
    location.state as {
      title: string;
      itemId: string;
      content: string;
    };
  const navigate = useNavigate();
  const itemUpdate = async (id?: string) => {
    try {
      setLoading(true);
      const response = await fetch(url + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: item }),
      });

      if ((await response).ok) {
        navigate("/");
      }
    } catch (err) {
      alert("Error on update element");
      return console.error("Error on update element: ", err);
    }
    setLoading(false);
  };

  const del = async (id?: string) => {
    try {
      setLoading(true);
      await fetch(url + id, { method: "DELETE" });
      navigate("/");
    } catch (err) {
      alert("Error on delete element");
      return console.error("Error on delete element: ", err);
    }
    setLoading(false);
  };

  const handleChangeTitle = (e: any) => {
    item.title = e.target.value;
  };

  const handleChangeContent = (e: any) => {
    item.content = e.target.value;
  };
  React.useEffect(() => {
    console.log(item, "content");
  }, []);
  return (
    <div className="about">
      {loading && <div>Loading...</div>}
      <InputGroup>
        <Form.Control
          type="text"
          defaultValue={item.title}
          onChange={(e) => handleChangeTitle(e)}
        />
        <Form.Control
          type="text"
          defaultValue={item.content}
          onChange={(e) => handleChangeContent(e)}
        />
        <InputGroup.Prepend>
          <Button variant={"primary"} onClick={() => itemUpdate(item.itemId)}>
            update
          </Button>
          <Button variant={"danger"} onClick={() => del(item.itemId)}>
            Delete
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
      {/* <Form.Control
        type="text"
        defaultValue={content.content}
        onKeyDown={itemUpdate(content.itemId)}
      /> */}
    </div>
  );
};

export default AboutItem;
