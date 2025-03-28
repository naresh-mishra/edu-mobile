import { HashRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <HashRouter>  
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/account" element={<AccountSettings/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
