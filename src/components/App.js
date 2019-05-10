import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import fishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  //1. Create the state like a initial state = empty state
  state = {
    fishes: {},
    order: {}
  };

  /***
    Mirror our fish state over to what is our firebase
    The way that we connect with the endpoint/firebase 
  ***/
  componentDidMount() {
    console.log("MOUNTED!");

    //ref differents from the inputs, sort of the reference to a piece of data in the DB
    //sync our state we do not have to do any updating
    const {params} = this.props.match;
    this.refBase = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
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

        <Order fishes={this.state.fishes} order={this.state.order} />

        <Inventory
          addFish={this.addFish}
          loadSamplesFishes={this.loadSamplesFishes}
        />
      </div>
    );
  }
}

export default App;
