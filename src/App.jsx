import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasseword] = useState("");
  const [confirmMail, setConfimrMail] = useState("");

  const [showError, setShowError] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPasseword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
};

return (
  <>
    <div>
      <h1>Create acount</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </>
);

export default App;
