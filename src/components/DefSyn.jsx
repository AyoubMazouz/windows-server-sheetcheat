import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const DefSyn = ({ children }) => {
    if (!children)
        return <div className="text-center">NOT AVAILABLE JUST YET!</div>;
    return (
        <SyntaxHighlighter
            language="text"
            className="syntax-highlighter text-sm"
            style={nightOwl}
            lineProps={{
                style: {
                    wordBreak: "break",
                    whiteSpace: "pre-wrap",
                },
            }}
            wrapLines={true}
            whiteSpace="pre-wrap"
        >
            {children}
        </SyntaxHighlighter>
    );
};

export default DefSyn;
