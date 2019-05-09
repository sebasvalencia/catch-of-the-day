import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import fishes from "../sample-fishes";

class App extends React.Component {
  //1. Create the state like a initial state = empty state
  state = {
    fishes: {},
    order: {}
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />

        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
