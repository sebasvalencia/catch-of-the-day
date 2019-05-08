import React, { Fragment } from "react";

class StorePicker extends React.Component {
  //what html element do I put in the DOM
  render() {
    //return JSX
    return (
      // <p>Hello World!</p>
      //   <React.Fragment>
      <Fragment>
        {/* <p>Fish!</p> */}
        <form className="store-selector">
          {/* this is a comment in JSX */}
          <h2>Please Enter A Store</h2>
          <input type="text" placeholder="Store Name" required />
          <button type='submit'>Visit Store ↪</button>
        </form>
      </Fragment>
      //   </React.Fragment>
    );
  }
}

export default StorePicker;
