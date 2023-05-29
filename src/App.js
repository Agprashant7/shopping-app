import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <SideBar />

        <Routes>{/* <Route exact path="/" element={<Feed />} /> */}</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
