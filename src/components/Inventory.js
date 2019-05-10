import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory!!!</h2>
        { Object.keys(this.props.fishes).map( keyFish => (
            <EditFishForm 
              key={keyFish} 
              index={keyFish} 
              fish={this.props.fishes[keyFish]} 
              updateFish={this.props.updateFish} 
            />
          )) 
        }
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamplesFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
