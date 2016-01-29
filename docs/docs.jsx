import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import * as docgen from "react-docgen";

class Docs extends React.Component {
  render() {
    return (
      <div className="demo">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          source={docgen.parse(require("!!raw!../src/my-sample-component"))}
          // `scope` is used by Component Playground to render live code snippets.
          // It needs React, ReactDOM, and your component, at a minimum.
          // See https://github.com/FormidableLabs/component-playground#scope
          scope={{React, ReactDOM, SampleClass: require("../src/my-sample-component")}}
          playgroundtheme="blackboard"/>
      </div>
    );
  }
}

ReactDOM.render(<Docs/>, document.getElementById("content"));
