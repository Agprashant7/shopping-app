import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import ShoppingList from "./components/ShoppingList";
import ShoppingHistory from "./components/ShoppingHistory";
import HistoryForPerticularId from "./components/HistoryForPerticularId";
import Statistics from "./components/Statistics";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { useEffect, useState } from "react";

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isShowRightDrawer, setIsShowRightDrawer] = useState(true);

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    setIsUserLogin(userLogin);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white flex flex-row">
        {isUserLogin && (
          <SideBar
            setIsShowRightDrawer={setIsShowRightDrawer}
            isShowRightDrawer={isShowRightDrawer}
          />
        )}
        <Routes>
          <Route
            exact
            path="/signin"
            element={<LogIn setIsUserLogin={setIsUserLogin} />}
          />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/"
            element={<ShoppingList isShowRightDrawer={isShowRightDrawer} />}
          />
          <Route
            exact
            path="/history"
            element={<ShoppingHistory isShowRightDrawer={isShowRightDrawer} />}
          />
          <Route
            exact
            path="/history/:id"
            element={
              <HistoryForPerticularId isShowRightDrawer={isShowRightDrawer} />
            }
          />
          <Route
            exact
            path="/statistics"
            element={<Statistics isShowRightDrawer={isShowRightDrawer} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
