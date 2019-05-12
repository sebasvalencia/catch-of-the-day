import React, { Fragment } from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  // handleClick = e => {
  //   //alert('hey');
  //   e.preventDefault();
  //   console.log("handleClick");
  // };

  //Create ref
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    console.log("Going to store");
    //1. Stop the form from submitting
    event.preventDefault();
    //2. Get the text from that input
    console.log(this);
    const storeName = this.myInput.current.value;
    console.log("storeName:", storeName);
    //3.Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  //what html element do I put in the DOM
  render() {
    //return JSX
    return (
      // <p>Hello World!</p>
      //   <React.Fragment>
      <Fragment>
        {/* <p>Fish!</p> */}
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* this is a comment in JSX */}
          {/* <button onClick={this.handleClick}>Click me!</button> */}
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store ↪</button>
        </form>
      </Fragment>
      //   </React.Fragment>
    );
  }
}

export default StorePicker;
