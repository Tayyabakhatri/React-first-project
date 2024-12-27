import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
export default function Api() {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData()
  }, []);
  let someData= data.slice(0,6)
  console.log(someData);
  
  return (
    <>
      {someData.map((posts) => (
        <Card key={posts.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{posts.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>{posts.body}</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
