import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';

function App() {
  //object
  const personName = {
    first: 'Williams',
    last:'Shakespeare'
  }

  //Array
  const nameList = [
    {
      first: 'Charles',
      last: 'Edward'
    },
    {
      first: 'Muthu',
      last: 'Kumar'
    },
    {
      first: 'Joe',
      last: 'Becham'
    }
  ]
  return (
    <div className="App">
      <h1>Hello!</h1>
       {/* String, Number and Boolean */}
      <Greet name="Naren" messageCount={20} isLoggedIn={true} />
       {/* Object */}
      <Person name={personName}/>
       {/* Array */}
      <PersonList names={nameList}/>
      {/* Union */}
      <Status status="loading"/>
      {/* Passing children props */}
      <Heading>Placeholder Text</Heading>
      <Oscar><Heading>Oscar goes to film Titanic!</Heading></Oscar>
      {/* Typing Events props */}
      <Button handleClick={(e, id) => {console.log('Button clicked!', e, id)}}></Button>
      <Input handleChange={(event) => {console.log('Text entered', event.target.value)}} value=''></Input>
       {/* Style props */}
       <Container styles={{border: "10px", background: "green", fontSize: "1rem" }} />
       {/* useState props */}
       <LoggedIn/>
       <User/>
    </div>
  );
}

export default App;
