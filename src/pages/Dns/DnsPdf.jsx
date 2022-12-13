import React from "react";
import Definition from "./Definition";
import Powershell from "./Powershell";
import Cmd from "./Cmd";

const DnsPdf = () => {
    return (
        <div>
            <h1>Definitions:</h1>
            <Definition />
            <h1>Powershell Commands:</h1>
            <Powershell />
            <h1>Command Line Commands:</h1>
            <Cmd />
        </div>
    );
};

export default DnsPdf;
