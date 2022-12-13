import React from "react";
import Video from "./Video";
import Powershell from "./Powershell";
import Cmd from "./Cmd";
import Definition from "./Definition";
import MinNavBar from "../../components/MinNavBar";

const Ad = () => {
    const [currEle, setCurrEle] = React.useState("powershell");

    const data = {
        powershell: <Powershell />,
        cmd: <Cmd />,
        definition: <Definition />,
    };

    React.useEffect(() => {
        document.title = "windows server - AD";
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1400px] flex flex-col items-center">
                <Video />
                <MinNavBar currEle={currEle} setCurrEle={setCurrEle} />
                <div className="w-full text-left">{data[currEle]}</div>
            </div>
        </div>
    );
};

export default Ad;
