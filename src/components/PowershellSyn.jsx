import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PowershellSyn = ({ children }) => {
    if (!children)
        return <div className="text-center">NOT AVAILABLE JUST YET!</div>;
    return (
        <SyntaxHighlighter
            language="powershell"
            className="syntax-highlighter text-sm w-full"
            style={nightOwl}
            lineProps={{
                style: {
                    wordBreak: "break",
                    whiteSpace: "pre-wrap",
                },
            }}
            wrapLines={true}
            showLineNumbers={true}
            lineNumberStyle={{
                color: "#aaa",
                width: "1rem",
                marginRight: "-5.75rem",
                marginLeft: "-1.25rem",
                marginTop: ".6rem",
            }}
            whiteSpace="pre-wrap"
        >
            {children}
        </SyntaxHighlighter>
    );
};

export default PowershellSyn;
