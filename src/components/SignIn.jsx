import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate=useNavigate();
  return (
    <div className="signin-container">
      <h1 className="signin-title">Signin to your PopX account</h1>
      <p className="signin-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <label className="input-label" htmlFor="email">Email Address</label>
      <input className="input-box" type="email" id="email" placeholder="Enter email address" />
      
      <label className="input-label" htmlFor="password">Password</label>
      <input className="input-box" type="password" id="password" placeholder="Enter password" />

      <button className="signin-button" onClick={()=>(navigate('/account'))}>Login</button>
    </div>
  );
};

export default SignIn;
