// import logo from './logo.svg';
import './App.css';
import ListData from './components/ListData';
import About from './components/About';
import Login from './components/Login';
import { Switch, Route} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
// import { Redirect } from "react-router-dom";
// import {useState} from 'react';

function App() {
  // const login = useState(false);

  return (
    <div >
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">Astronomy</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href = "/home" >Home</Nav.Link>
        <Nav.Link href = "/about">About</Nav.Link>
        <Nav.Link href ="/login">Login</Nav.Link>      
    </Nav>
    </Container>
  </Navbar>

      <Switch>
        <Route exact path= "/">
        {/* {login ? <Redirect to = "/login"/> : <Redirect to = "/home"/>} */}
          <Login/>
        </Route>
        <Route exact path="/home">
          <ListData/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;