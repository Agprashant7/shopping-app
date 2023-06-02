import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import ShoppingList from "./components/ShoppingList";
import ShoppingHistory from "./components/ShoppingHistory";
import HistoryForPerticularId from "./components/HistoryForPerticularId";
import Statistics from "./components/Statistics";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white flex flex-row">
        {/* <SideBar /> */}
        <Routes>
          <Route exact path="/signin" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<ShoppingList />} />
          <Route exact path="/history" element={<ShoppingHistory />} />
          <Route
            exact
            path="/history/:id"
            element={<HistoryForPerticularId />}
          />
          <Route exact path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
