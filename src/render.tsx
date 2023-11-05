import React from "react";
import ReactDOMServer from "react-dom/server";
import Content from "./components/Content";

function Render(content?: string): string {
  try {
    return ReactDOMServer.renderToString(
        <html>
            <head>
                <title>GCEngine C@E React Demo</title>
            </head>
            <body>
                <div id="root">
                    <Content title="GCEnine C@E">{content}</Content>
                </div>
            </body>
        </html>
    );
  } catch (e) {
    console.log(e);
    return `There was an error processing the request: ${e}`;
  }
}

export default Render;