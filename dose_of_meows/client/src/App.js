import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserProfiles from "./pages/UserProfiles/UserProfiles";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home />} />
       <Route path="/UserProfile" element={<UserProfiles />} /> 
    </Routes>
  );
}

export default App;
