import React from "react";

const About = () => {
    React.useEffect(() => {
        document.title = "windows server - About";
    }, []);
    return (
        <div className="my-12">
            <div>
                Windows Server Ultimate Place to Revise (still in process of
                getting there!)
            </div>
            <div className="my-8">
                <a
                    href="https://github.com/AyoubMazouz/windows-server.git"
                    target="__blank"
                    className="font-semibold underline mx-4"
                >
                    Source Code
                </a>
            </div>
            <div>
                <div className="text-xl text-gray-200">Contributors:</div>
                <a
                    href="https://www.linkedin.com/in/ayoub-mazouz-8aa85a226/"
                    target="__blank"
                    className="font-semibold underline mx-4"
                >
                    Mazouz Ayoub
                </a>
            </div>
        </div>
    );
};

export default About;
