import React from "react";
import MainScreen from "../../component/MainScreen/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import notes from "../../data/notes";
const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back Prashant...">
      <Link to="/createnode"/>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
        {notes.map(note=>(
            <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>
        ))}
        
      
    </MainScreen>
  );
};

export default MyNotes;
