import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";


class App extends Component {
    public render() {
        return <p>This is my new react app</p>;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
