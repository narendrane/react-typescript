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
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { UserDetails } from './components/context/UserDetails'
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { CounterClass } from './components/class/CounterClass';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/CustomButton';
import { CustomInput } from './components/html/CustomInpt';
import { CustomComponent } from './components/html/CustomComponent';
import { PolyMorph } from './components/polymorphic/PolyMorph';
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
        
      {/* Typing useReducer */}
        <Counter/>

      {/* Typing useContext */}
      <hr/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      {/* Typing useContext for user context */}
      <UserContextProvider>
        <UserDetails/>
      </UserContextProvider>

      {/* Typing useRef Hook */}
      <DomRef/>
      <MutableRef/>

      {/* Typing Class component*/}
      <CounterClass message={"Increment the counter here with class component ->"}/>

    {/* Typing component props */}
    <hr/>
      <Private isLoggedIn={false} component={Profile}/>
      <Private isLoggedIn={true} component={Profile}/>
    
    {/* Genrics props */}
    <hr/>
    <List items={["Superman", "Batman", "WonderWomen"]} onClick={(item)=>{console.log(item)}}/>
    <List items={[1, 2, 3]} onClick={(item)=>{console.log(item)}}/>

    {/* Restriction props */}
    <hr/>
    <RandomNumber  value={10} isPostive/>

    {/* Template Literal props */}
      <hr/>
      <Toast position="left-top"/>
    {/* Wrapping HTML props */}
    <hr/>
    <CustomButton variant="primary" onClick={() => console.log("clicked")}>
      Primary Button
      </CustomButton>
      <CustomInput onChange={(e)=> console.log(e)}/>
      {/* Extracting Component props */}
      <hr/>
      <CustomComponent isLoggedIn name='Test'/>
       {/* Polymorphic props */}
       <hr/>
       <PolyMorph as="h1" size="lg" color="primary">Heading</PolyMorph>
       <PolyMorph as="p" size="md">Paragraph</PolyMorph>
       <PolyMorph htmlFor="someId" as="label" size="sm" color="secondary">Text content</PolyMorph>
    </div>
  );
}

export default App;
