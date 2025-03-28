import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  return (
    <div className="signup-container">
      <h1 className="signup-title">Create your PopX account</h1>

      <label className="input-label" htmlFor="fullName">Full Name<span className="required">*</span></label>
      <input className="input-box" type="text" id="fullName" placeholder="Enter full name" required />

      <label className="input-label" htmlFor="phone">Phone Number<span className="required">*</span></label>
      <input className="input-box" type="text" id="phone" placeholder="Enter phone number" required />

      <label className="input-label" htmlFor="email">Email Address<span className="required">*</span></label>
      <input className="input-box" type="email" id="email" placeholder="Enter email address" required />

      <label className="input-label" htmlFor="password">Password<span className="required">*</span></label>
      <input className="input-box" type="password" id="password" placeholder="Enter password" required />

      <label className="input-label" htmlFor="company">Company Name</label>
      <input className="input-box" type="text" id="company" placeholder="Enter company name" required />
      <div className="radio-container">
        <div className="input-label">Are you an Agency?*</div>
        <div className="radio-group">
          <input type="radio" id="yes" name="agency" value="Yes" />
          <label className="radio-label" htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="agency" value="No" />
          <label className="radio-label" htmlFor="no">No</label>
        </div>
      </div>

      <button className="signup-button" onClick={()=>(navigate('/account'))}>Create Account</button>
    </div>
  );
};

export default SignUp;
