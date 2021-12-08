import React, { useEffect, useState } from "react";
import MainScreen from "../../component/MainScreen/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";

import axios from "axios";
const MyNotes = () => {
  const[notes,setNotes] = useState([])
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };
  const fetchNotes = async () => {
    const {data}=await axios.get('/api/notes');
    setNotes(data);
  }
  console.log(notes);
  useEffect(() => {
      fetchNotes()
    }
  , [])
  return (
    <MainScreen title="Welcome Back Prashant...">
      <Link to="/createnode">
      <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
        Create New Note
      </Button>
      </Link>
      
      {notes.map((note) => (
        <Accordion key={note._id}>
           <Accordion.Item eventKey="0">
            
            <Accordion.Header>
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
           
             <Button href={`/node/${note._id}`}>Edit</Button>
             <Button
               variant="danger"
               className="mx-2"
               onClick={() => deleteHandler(note._id)}
             >
               Delete
             </Button>
           
         
         
            </Accordion.Header>
          
          <Accordion.Body>
          <Card.Body >
          <h4>
                      <Badge bg="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
            <blockquote className="blockquote mb-0">
              <p>
                {note.content}
              </p>
              <footer className="blockquote-footer">
                Created ON -date 
              </footer>
            </blockquote>
          </Card.Body>
          </Accordion.Body>
         
        
        </Accordion.Item>
        </Accordion>
        
      ))}
    </MainScreen>
  );
};

export default MyNotes;
