import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import { TopicContext } from "./context";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [topic, setTopic] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <TopicContext.Provider
      value={{
        topic,
        setTopic,
        menuOpen,
        setMenuOpen,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="flex-container">
            <Sidebar />
            <div className={`${menuOpen && "margin-container"}`}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/topic/:id" element={<Home topic={topic} />} />
                <Route path="*" element={<Main />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </TopicContext.Provider>
  );
}

export default App;
