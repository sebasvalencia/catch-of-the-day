import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import fishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import PropTypes from "prop-types";

class App extends React.Component {
  //1. Create the state like a initial state = empty state
  state = {
    fishes: {},
    order: {}
  };

  static propTypes = {
    match : PropTypes.object
  }

  /***
    Mirror our fish state over to what is our firebase
    The way that we connect with the endpoint/firebase 
  ***/
  componentDidMount() {
    console.log("MOUNTED!");

    const {params} = this.props.match;

    //First reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef) //string to object
      });
    }
    
    //ref differents from the inputs, sort of the reference to a piece of data in the DB
    //sync our state we do not have to do any updating
    this.refBase = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });

  }
  
  componentDidUpdate() {
    console.log('IT UPDATED');
    //we can use this.props or this.state
    console.log(this.state.order);

    //JSON.stringify(this.state.order) for do not give [object Object]
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  /*** remove refBase from DB  ***/
  componentWillUnmount() {
    //clean up any memory issues that may have
    console.log("UNMOUNTEDING!!!");
    base.removeBinding(this.refBase);
  }


  loadSamplesFishes = () => {
    console.log('loadSamplesFishes');
    this.setState({
      fishes : fishes
    });
  };

  /*** Add a Fish to the state ***/
  addFish = fish => {
    console.log("Adding a fish!");

    //1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };

    //2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;

    //3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    });
  };

  /*** Update a Fish to the state ***/
  updateFish = (key, updatedFish) => {
    //1. Take a copy of the state
    const fishes = {...this.state.fishes};
    //2. Update the state - override the fish
    fishes[key] = updatedFish;
    //3. Set that to state
    this.setState({
      fishes: fishes
    });
  }

  deleteFish = (key) => {
    //1. Take a copy of the state
    const fishes = {...this.state.fishes};
    //2. Remove fish from state
    fishes[key] = null;
    //3. update state
    this.setState({
      fishes: fishes
    });
  }


  /*** Add a Fish to an Order ***/
  addToOrder = key => {
    //1. Take a copy of state
    const order = {...this.state.order};
    //2. Either add to the order, or update the number in our order
    order[key] = order[key] +1 || 1;
    //3. Call set State to update our state object
    this.setState({
      order: order
    });
  }

  removeFromOrder = key => {
    //1. Take a copy of state
    const order = {...this.state.order};
    //2. Remove that item from order
    delete order[key];
    //3. Call set State to update our state object
    this.setState({
      order: order
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />

          <ul className="fishes">
            {/* print each of the fish component element */}
            {
            Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>

        </div>

        <Order 
        fishes={this.state.fishes} 
        order={this.state.order} 
        removeFromOrder={this.removeFromOrder}
         />

        <Inventory
          fishes={this.state.fishes}
          loadSamplesFishes={this.loadSamplesFishes}
          storeId={this.props.match.params.storeId}
          addFish={this.addFish}
          deleteFish={this.deleteFish}
          updateFish={this.updateFish}
        />
      </div>
    );
  }
}

export default App;
