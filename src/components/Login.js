import { useState } from "react";
import { useHistory } from "react-router-dom";

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
  }
]);

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(dataLogin);

    if (dataLogin.email === user.email){
      if (dataLogin.password === user.password){
        history.push("listData.js")
      }
    } else {
      alert("email dan password salah")
    }
  }


  return (
    <div>
      <h1 className= "judul3">Login</h1>

      <form>
        <input 
          type="text" 
          name="email" 
          placeholder="email" 
          id=""
          value={dataLogin.email}
          onChange={handleChange}
          />

        <input 
          type="text" 
          name="password" 
          placeholder="password" 
          id="" 
          value={dataLogin.password}
          onChange={handleChange}
          />

          <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;