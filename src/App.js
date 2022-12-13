import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages.
import About from "./pages/About";
import Dhcp from "./pages/Dhcp/Dhcp";
import Dns from "./pages/Dns/Dns";
import Ad from "./pages/Ad/Ad";
import Dfs from "./pages/Dfs/Dfs";
import Wds from "./pages/Wds/Wds";
// Prepare Pdf
import DhcpPdf from "./pages/Dhcp/DhcpPdf";
import DnsPdf from "./pages/Dns/DnsPdf";
import AdPdf from "./pages/Ad/AdPdf";
import DfsPdf from "./pages/Dfs/DfsPdf";
import WdsPdf from "./pages/Wds/WdsPdf";

function App() {
    return (
        <div className="App bg-dark px-8 text-gray-200">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Dhcp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dhcp" element={<Dhcp />} />
                    <Route path="/dns" element={<Dns />} />
                    <Route path="/ad" element={<Ad />} />
                    <Route path="/dfs" element={<Dfs />} />
                    <Route path="/wds" element={<Wds />} />
                    {/* Prepare pdf */}
                    <Route path="/dhcp/pdf" element={<DhcpPdf />} />
                    <Route path="/dns/pdf" element={<DnsPdf />} />
                    <Route path="/ad/pdf" element={<AdPdf />} />
                    <Route path="/dfs/pdf" element={<DfsPdf />} />
                    <Route path="/wds/pdf" element={<WdsPdf />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
