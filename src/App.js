import React, { useState, useEffect } from "react";
import db from "./firebase";
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import "./App.css";
import Message from './message'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();

    // create data
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  useEffect(()=>{
    setUsername(prompt('please enter your name'))
  }, [])

  useEffect(()=>{
    // get data
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      // console.log(snapshot.docs)
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
    console.log(messages)
  }, [])

  return (
    // BEM
    <div className="app">
      <form className="app_form">
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}></Input>
          <Button disabled={!input} variant="contained" type='submit' onClick={sendMessage}>Send Message</Button>
          </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>


    </div>
  );
}

export default App;
