import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSamplesFishes: PropTypes.func
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory!!!</h2>
        {Object.keys(this.props.fishes).map(keyFish => (
          <EditFishForm
            key={keyFish}
            index={keyFish}
            fish={this.props.fishes[keyFish]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamplesFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
