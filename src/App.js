// import logo from './logo.svg';
import './App.css';
import ListData from './components/ListData';
import About from './components/About';
import Login from './components/Login';
import { Switch, Route, Redirect} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {useState} from 'react';

function App() {
  const [login] = useState(true);
  return (
    <div >
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Astronomy</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href = "/" >Home</Nav.Link>
      <Nav.Link href = "/about">About</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

      <Switch>
        <Route exact path= "/">
        { login ? <ListData/> : <Redirect to = "/login"/>}
          {/* <ListData/> */}
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
