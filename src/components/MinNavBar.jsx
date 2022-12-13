import React from "react";

const MinNavBar = ({ currEle, setCurrEle }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1400px] flex justify-center items-center">
                <div
                    onClick={(e) => setCurrEle("powershell")}
                    className={`nav-bar-ele ${
                        currEle === "powershell" && "bg-gray-700"
                    }`}
                >
                    powershell
                </div>
                <div
                    onClick={(e) => setCurrEle("cmd")}
                    className={`nav-bar-ele ${
                        currEle === "cmd" && "bg-gray-700"
                    }`}
                >
                    cmd
                </div>
                <div
                    onClick={(e) => setCurrEle("definition")}
                    className={`nav-bar-ele ${
                        currEle === "definition" && "bg-gray-700"
                    }`}
                >
                    definition
                </div>
                <a
                    href={
                        "/pdfs/" +
                        currEle +
                        "-powershell-cmd-definitions-beta.pdf"
                    }
                    download
                    className="nav-bar-ele"
                >
                    download
                </a>
            </div>
        </div>
    );
};

export default MinNavBar;
