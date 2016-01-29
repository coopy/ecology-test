import React from 'react';

const MySampleComponent = React.createClass({
  propTypes: {
    /**
     * A test prop
     * @examples "Test", "More Test", "Yep"
     */
    testProp: React.PropTypes.string
  },
  
  render() {
    return (<div>Sample</div>);
  }
});

// class MySampleComponent extends React.Component {
//   render() {
//     return (<div>Sample</div>);
//   }
// }
//
// MySampleComponent.propTypes = {
//   /**
//    * A test prop
//    * @examples "Test", "More Test", "Yep"
//    */
//   testProp: React.PropTypes.string
// }

export default MySampleComponent;
