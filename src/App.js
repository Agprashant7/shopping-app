import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import ShoppingList from "./components/ShoppingList";
import ShoppingHistory from "./components/ShoppingHistory";
import HistoryForPerticularId from "./components/HistoryForPerticularId";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <SideBar/>
        <Routes>
          <Route exact path="/" element={<ShoppingList />} />
          <Route exact path="/history" element={<ShoppingHistory />} />
          <Route exact path="/history/:id" element={<HistoryForPerticularId />} />

        </Routes>
      </div>
    </BrowserRouter>


  )
}
export default App;
