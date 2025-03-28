import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate=useNavigate();
  return (
    <div className="container">
      <h1 className="title">Welcome to PopX</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button className="createButton" onClick={()=>(navigate('/signUp'))}>Create Account</button>
      <button className="loginButton" onClick={()=>(navigate('/signIn'))}>Already Registered? Login</button>
    </div>
  );
};

export default LandingScreen;
