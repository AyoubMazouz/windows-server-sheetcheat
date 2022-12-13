import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    return (
        <div className="w-full flex justify-center print:hidden">
            <nav className="w-full max-w-[1400px] flex justify-center md:justify-between items-center flex-wrap">
                <div className="flex justify-center items-center flex-wrap">
                    <Link
                        to="/dhcp"
                        className={`nav-bar-ele ${
                            location.pathname === "/dhcp" && "bg-gray-700"
                        }`}
                    >
                        dhcp
                    </Link>
                    <Link
                        to="/dns"
                        className={`nav-bar-ele ${
                            location.pathname === "/dns" && "bg-gray-700"
                        }`}
                    >
                        dns
                    </Link>
                    <Link
                        to="/ad"
                        className={`nav-bar-ele ${
                            location.pathname === "/ad" && "bg-gray-700"
                        }`}
                    >
                        ad
                    </Link>
                    <Link
                        to="/dfs"
                        className={`nav-bar-ele ${
                            location.pathname === "/dfs" && "bg-gray-700"
                        }`}
                    >
                        dfs
                    </Link>
                    <Link
                        to="/wds"
                        className={`nav-bar-ele ${
                            location.pathname === "/wds" && "bg-gray-700"
                        }`}
                    >
                        wds
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    <Link
                        to="/about"
                        className={`nav-bar-ele ${
                            location.pathname === "/about" && "bg-gray-700"
                        }`}
                    >
                        about
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
