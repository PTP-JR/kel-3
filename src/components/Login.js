import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

function Login() {
  const history = useHistory()

  const [user, setUser] = useState([
    {
    email: "edito.bdg@gmail.com",
    password: "123"
  },{
    email: "rodhiyah.desviana@gmail.com",
    password: "123"
  },{
    email: "shofiyyahsalma25@gmail.com",
    password: "123"
  },{
    email: "shella.batrisyia.lupita@gmail.com",
    password: "123"
  },{
    email: "user1",
    password: "user1"
  }
]);

  const [dataLogin, setDataLogin] = useState([{
    email: "",
    password: ""
  }]);

  const handleChange = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataLogin);
    setUser(user);

    for (let i = 0; i < user.length; i++) {
      if (user[i].email === dataLogin.email) {
        if (user[i].password === dataLogin.password) {
          history.push("/home");
          break;
        } else {
          alert("Password salah");
          break;
        }
      } 
      else if (user[i].email !== dataLogin.email && user[i].password !== dataLogin.password) {
        if (user.length - 1 === i) {
          alert("Email dan Password salah");
          break;
        } 
        // else {
        //   continue;
        // }
      }
      else if (user[i].email !== dataLogin.email && user[i].password === dataLogin.password) {
        if (user.length - 1 === i) {
          alert("Email salah");
          break;
        } 
        // else {
        //   continue;
        // }
      }
    }
  
  }

  return (
    <>
      <h1 className= "judul3">Login</h1>
      <div className= "login1">

        <Container id="login">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name= "email" type="email" placeholder="Enter email" value={dataLogin.email} onChange={handleChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" value={dataLogin.password} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  onClick={handleSubmit} variant="primary" type="submit">
            Login
          </Button>
        </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;