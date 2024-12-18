import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Login } from "./pages/Register";
import Chat from "./pages/Chat";
import SetAvatar from "./components/SetAvatar";
import ErrorModal from "./components/ErrorModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Chat />}></Route>
        <Route path="/setAvatar" element={<SetAvatar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
