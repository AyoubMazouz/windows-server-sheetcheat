import React from "react";
import Video from "./Video";
import Powershell from "./Powershell";
import Cmd from "./Cmd";
import Definition from "./Definition";
import MinNavBar from "../../components/MinNavBar";

const Wds = () => {
    const [currEle, setCurrEle] = React.useState("powershell");

    const data = {
        powershell: <Powershell />,
        cmd: <Cmd />,
        definition: <Definition />,
    };

    React.useEffect(() => {
        document.title = "windows server - WDS";
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1400px] flex flex-col items-center">
                <Video />
                <MinNavBar currEle={currEle} setCurrEle={setCurrEle} />
                {data[currEle]}
            </div>
        </div>
    );
};

export default Wds;
