import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  interface IElement {
    _id?: string;
    title?: string;
    content?: string;
  }
  const url = "http://localhost:5000/";
  const navigate = useNavigate();
  const [elements, setElements] = useState<IElement[]>([]);
  useEffect(() => {
    read();
  }, []);

  const read = async () => {
    try {
      const response = await fetch(url);
      const elements: IElement[] = await response.json();
      return setElements(elements);
    } catch (err) {
      alert("Error on read elements");
      return console.error("Error on read elements: ", err);
    }
  };

  const del = async (id?: string) => {
    try {
      await fetch(url + id, { method: "DELETE" });
      read();
    } catch (err) {
      alert("Error on delete element");
      return console.error("Error on delete element: ", err);
    }
  };

  const aboutItem = (
    id: any,
    title?: string,
    key?: number,
    content?: string
  ) => {
    navigate("/aboutItem/" + key, {
      state: {
        itemId: id,
        title,
        content,
      },
    });
  };
  return (
    <div>
      <div className="title">
        <span>Posts</span>
      </div>
      {elements.map((element, key) => (
        <div className="items">
          <Col key={element._id} className="p-2">
            <InputGroup>
              <div style={{ display: "flex" }}>
                <span className="item-title">{`${element.title}`}</span>
                <span className="item-content">{`${element.content}`}</span>
              </div>
              <InputGroup.Prepend></InputGroup.Prepend>
            </InputGroup>
          </Col>
          <FontAwesomeIcon
            icon={faEdit}
            className="icon1"
            onClick={() =>
              aboutItem(element._id, element.title, key, element.content)
            }
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faTrash}
            className="icon2"
            onClick={() => del(element._id)}
          ></FontAwesomeIcon>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
