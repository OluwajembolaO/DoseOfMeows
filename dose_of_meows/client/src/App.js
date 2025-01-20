import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserProfiles from "./pages/Login/UserProfiles/UserProfiles"
import Home from './pages/Login/Home/Home'


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
