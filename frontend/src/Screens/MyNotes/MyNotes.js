import React from "react";
import MainScreen from "../../component/MainScreen/MainScreen";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
const MyNotes = () => {
  return (
  <MainScreen title="Welcome Back Prashant">
    <Link to="/createnewnode">
        <Button style={{marginLeft: 10,marginBottom: 6}} size='lg'>
            Create New Note
        </Button>

    </Link>

    </MainScreen>
  )};

export default MyNotes;
