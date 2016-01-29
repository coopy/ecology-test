Interactive Docs for My Component
        =================================

        PlayGround
        ----------

        A `playground` triple-backtick snippet will render your component for you. This is useful for quick interactive component demos without the need to add boilerplate.

        ```playground
        <MyComponent />
        ```

        NoRender Playground
        -------------------

        A `playground_norender` triple-backtick snippet will not do automatic rendering of your component; you have to manually call `ReactDom.render`. Useful for examples of using your component in context.

        ```playground_norender
        var App = React.createClass({
          render() {
              return (
              <MyComponent />
              );
            }
        })

        ReactDOM.render(<App/>, mountNode);
        ```

        ## Prop Types

        Ecology will inject a `propTypes` table at the bottom of your component docs. This is generated from the component `propTypes` definition, and takes into account JSDoc style comments for each `propType`
