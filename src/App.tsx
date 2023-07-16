import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SwapScreen } from "./screen/swap.screen";
import { PoolScreen } from "./screen/pool.screen";
import { Header } from "./component/common/header.component";
import { Sidebar } from "./component/common/right-side-bar.component";
import { BehaviorSubject } from "rxjs";
import { createRoutesFromElements, createBrowserRouter, Routes, Route } from "react-router-dom";
import { Token } from "./screen/tokens.screen";

function App() {
  const sidebarListener = new BehaviorSubject(false);
  const sidebarListener$ = sidebarListener.asObservable();

  return (
    <div className="w-full h-screen box-border m-0 p-0 scroll-smooth" id="home">
      <Header sidebarSubject={sidebarListener} />
      <Sidebar listener={sidebarListener$} />
      <Routes>
        <Route path="/" element={<SwapScreen sidebarSubject={sidebarListener} />} />
        <Route path="/pool" element={<PoolScreen sidebarSubject={sidebarListener} />} />
        <Route path="/tokens" element={<Token />} />
      </Routes>
    </div>
  );
}

export default App;
